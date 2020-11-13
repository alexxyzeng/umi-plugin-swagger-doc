import { join, resolve } from "path";

export default {
  plugins: [
    [
      join(__dirname, "..", require("../package").main || "index.js"),
      {
        swaggerUrl: "http://df-datacenter.v220.svc.cluster.local",
        swaggerDocPath: "/v2/api-docs",
        swaggerUIPath: "",
        // 配置文件路径
        configPath: resolve(__dirname, "swagger_config"),
        // mock数据路径
        mockPath: resolve(__dirname, "mock"),
        // enum数据路径
        enumPath: resolve(__dirname, "enum"),
        // pages路径
        pagePath: resolve(__dirname, "src", "pages"),
        // service文件路径
        serviceTag: "service",
        // 枚举名称config
        enumConfigName: "enumNameConfig.json",
        // service前缀
        servicePrefix: ""
      }
    ]
  ]
};
