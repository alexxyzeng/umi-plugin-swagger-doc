// ref:
// - https://umijs.org/plugin/develop.html
// import { IApi } from "umi-types";
import fs from "fs";
import { resolve } from "path";
import { swaggerDocPath, generateFile, generateEnums } from "swagger-to-jsdoc";
import fetch from "node-fetch";

let routeList = new Set();

global.definitions = {};

const methods = {
  getSwaggerData,
  generateService
};

/**
 *
 * @param {IApi} api
 * @param {*} options
 */
export default function(api, options) {
  // Example: output the webpack config
  api.addUIPlugin(require.resolve("../dist/index.umd"));
  api.onUISocket(({ action, failure, success }) => {
    const { type, payload } = action;
    if (!type.startsWith("org.alexzeng.umi-plugin-swagger-doc")) {
      return;
    }
    const subType = type.replace("org.alexzeng.umi-plugin-swagger-doc.", "");
    if (subType === "getSwaggerData") {
      getSwaggerData(api, options, payload, success);
    } else if (subType === "generateService") {
      console.log("generate service");
      generateService(api, options, payload, success);
    } else if (subType === "generateEnums") {
      getEnums(api, options, payload, success);
    }
  });
  api.modifyRoutes(routes => {
    routeList = new Set();
    // fs.writeFileSync("./routes.json", JSON.stringify(routes, null, 2));
    recursiveParseRoutes(routes);
    return routes;
  });
}

const serviceConfigName = "serviceConfig.json";
const methodConfigName = "method.json";
function getSwaggerData(api, options, payload, success, failure) {
  const {
    swaggerUrl,
    swaggerDocPath,
    configPath,
    mockPath,
    enumPath
  } = options;
  if (!fs.existsSync(configPath)) {
    fs.mkdirSync(configPath);
  }
  const serviceConfigPath = resolve(configPath, serviceConfigName);
  let serviceConfig = {};
  if (fs.existsSync(serviceConfigPath)) {
    serviceConfig =
      JSON.parse(fs.readFileSync(serviceConfigPath, "utf-8") || "{}") || {};
  }

  const methodConfigPath = resolve(configPath, methodConfigName);
  let methodConfig = {};
  if (fs.existsSync(methodConfigPath)) {
    methodConfig = JSON.parse(
      fs.readFileSync(methodConfigPath, "utf-8") || "{}"
    );
  }
  // 读取对应的路径
  fetch(`${swaggerUrl}/${swaggerDocPath}`)
    .then(res => res.json())
    .then(json => {
      const { paths, definitions, tags } = json;
      global.definitions = definitions;
      let result = [];
      const tagHash = {};
      tags?.forEach(tag => {
        const { name, description } = tag;
        tagHash[name] = description;
      });
      for (let pathStr in paths) {
        let pathConfig = serviceConfig?.[pathStr];
        let serviceName = pathConfig?.name;
        let pathUrl = pathConfig?.path || "";
        if (!pathConfig) {
          serviceName = pathStr.replace(/\//g, "-").replace("-", "");
          serviceConfig[pathStr] = { name: serviceName };
        }
        let pathInfo = {
          path: pathStr,
          pathName: serviceName,
          methods: [],
          tag: "",
          routes: Array.from(routeList),
          targetPath: pathUrl
        };
        const pathMethods = paths[pathStr];
        const tagSet = new Set();
        for (let method in pathMethods) {
          const methodInfo = pathMethods[method];
          const { tags: tagList = [], operationId } = methodInfo;
          let name = methodConfig[operationId];
          // console.log(operationId, "----", name);
          if (!name) {
            name = operationId;
            methodConfig[operationId] = operationId;
          }
          let tagDesc = [];
          tagList?.forEach(tag => {
            const tagInfo = tagHash[tag];
            tagSet.add(tagInfo);
            tagDesc.push(tagInfo);
          });
          methodInfo.name = name;
          methodInfo.tagDesc = tagDesc;
          methodInfo.methodName = method;

          pathInfo.methods.push(methodInfo);
        }
        pathInfo.tag = Array.from(tagSet).join(",");
        result.push(pathInfo);
      }
      fs.writeFileSync(
        serviceConfigPath,
        JSON.stringify(serviceConfig, null, 2)
      );
      fs.writeFileSync(methodConfigPath, JSON.stringify(methodConfig, null, 2));
      success && success({ data: result });
    });
}

function generateService(api, options, payload, success, failure) {
  console.log(payload, "---- payload");
  const { pathItem, fileName, names, path: pathUrl } = payload;

  const { configPath, pagePath, serviceTag, mockPath } = options;
  const serviceConfigPath = resolve(configPath, serviceConfigName);
  const serviceConfig = JSON.parse(
    fs.readFileSync(serviceConfigPath, "utf-8") || "{}"
  );
  const { path } = pathItem;
  // TODO: 移除之前的记录
  // const prevConfig = serviceConfig[path];
  // if (prevConfig) {
  //   const { path: prevPath, name: prevName } = prevConfig;
  //   if (!prevPath || !prevName) {
  //     return;
  //   }
  //   const prevServicePath = resolve(
  //     `${pagePath}${prevPath}/${serviceTag}`,
  //     `${prevName}.js`
  //   );

  //   if (fs.existsSync(prevServicePath)) {
  //     fs.unlinkSync(prevServicePath);
  //   }

  //   const prevMockPath = resolve(mockPath, `${prevName}.js`);
  //   if (fs.existsSync(prevMockPath)) {
  //     fs.unlinkSync(prevMockPath);
  //   }
  // }
  generateFile(payload, global.definitions, undefined, options);
  serviceConfig[path] = { path: pathUrl, name: fileName };
  fs.writeFileSync(serviceConfigPath, JSON.stringify(serviceConfig, null, 2));

  const methodConfigPath = resolve(configPath, methodConfigName);
  const methodConfig = JSON.parse(
    fs.readFileSync(methodConfigPath, "utf-8") || "{}"
  );
  for (let nameKey in names) {
    methodConfig[nameKey] = names[nameKey];
  }
  fs.writeFileSync(methodConfigPath, JSON.stringify(methodConfig, null, 2));
}

function recursiveParseRoutes(routes) {
  routes.forEach(route => {
    const { path, routes: subRoutes } = route;
    routeList.add(path);
    if (Array.isArray(subRoutes) && subRoutes.length > 0) {
      recursiveParseRoutes(subRoutes);
    }
  });
}

function getEnums(api, options, payload, success) {
  const {
    swaggerUrl,
    swaggerDocPath,
    configPath,
    mockPath,
    enumPath,
    enumConfigName
  } = options;
  const enumConfigPath = resolve(configPath, enumConfigName);
  if (!fs.existsSync(configPath)) {
    fs.mkdirSync(configPath);
  }
  if (!fs.existsSync(enumPath)) {
    fs.mkdirSync(enumPath);
  }
  fetch(`${swaggerUrl}/${swaggerDocPath}`)
    .then(res => res.json())
    .then(json => {
      const { paths, definitions, tags } = json;
      global.definitions = definitions;
      generateEnums(paths, definitions, options, payload);
      if (fs.existsSync(enumConfigPath)) {
        const enumConfig =
          JSON.parse(fs.readFileSync(enumConfigPath, "utf-8") || "{}") || {};
        success({ data: enumConfig });
      } else {
        success({ data: {} });
      }
    });
}
