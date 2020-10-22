// ref:
// - https://umijs.org/plugin/develop.html
import fs from "fs";
import path from "path";
import { swaggerDocPath, generateFiles } from "swagger-to-jsdoc";
import fetch from "node-fetch";

export default function(api, options) {
  // Example: output the webpack config
  api.addUIPlugin(require.resolve("../dist/index.umd"));
  api.onUISocket(({ action, failure, success }) => {
    if (action.type === "org.alexzeng.umi-plugin-swagger-doc.getSwaggerData") {
      getSwaggerData(api, options, success);
    }
  });
  console.log(options, "---- options");
}

function getSwaggerData(api, options, success, failure) {
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
      let result = [];
      const tagHash = {};
      tags?.forEach(tag => {
        const { name, description } = tag;
        tagHash[name] = description;
      });
      for (let path in paths) {
        let pathInfo = { path, methods: [], tag: "" };
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
