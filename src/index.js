// ref:
// - https://umijs.org/plugin/develop.html
// import { IApi } from "umi-types";
import fs from "fs";
import path from "path";
import { swaggerDocPath, generateFile } from "swagger-to-jsdoc";
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
      generateService(api, options, payload, success);
    }
  });
  api.modifyRoutes(routes => {
    routeList = new Set();
    fs.writeFileSync("./routes.json", JSON.stringify(routes, null, 2));
    recursiveParseRoutes(routes);
    return routes;
  });
}

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
      for (let path in paths) {
        let pathInfo = {
          path,
          methods: [],
          tag: "",
          routes: Array.from(routeList)
        };
        const pathMethods = paths[path];
        const tagSet = new Set();
        for (let method in pathMethods) {
          const methodInfo = pathMethods[method];
          const { tags: tagList = [] } = methodInfo;
          let tagDesc = [];
          tagList?.forEach(tag => {
            const tagInfo = tagHash[tag];
            tagSet.add(tagInfo);
            tagDesc.push(tagInfo);
          });
          methodInfo.tagDesc = tagDesc;
          methodInfo.methodName = method;

          pathInfo.methods.push(methodInfo);
        }
        pathInfo.tag = Array.from(tagSet).join(",");
        result.push(pathInfo);
      }
      success && success({ data: result });

      // const pathUrl = path.resolve(configPath, "paths.json");
      // fs.writeFileSync(pathUrl, JSON.stringify(paths, null, 2));
      // const definitionUrl = path.resolve(configPath, "definitions.json");
      // fs.writeFileSync(definitionUrl, JSON.stringify(definitions, null, 2));
      // generateFiles(paths, definitions, undefined, []);
    });
}

function generateService(api, options, payload, success, failure) {
  const { pathItem, fileName, names } = payload;
  generateFile(payload, global.definitions, undefined, options);
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
