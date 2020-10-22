import { join, resolve } from "path";

export default {
  routes: [{ path: "/", component: "./index" }],
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
        enumPath: resolve(__dirname, "enum")
        // service路径
      }
    ]
  ]
};
