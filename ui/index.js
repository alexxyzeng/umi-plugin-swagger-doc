import { useEffect, useState, useRef } from "react";
import { Button, Collapse } from "antd";
import PathItem from "./PathItem";
import "./index.css";
import PathHeader from "./PathHeader";
import PathConfig from "./PathConfig";
const { Panel } = Collapse;

export default api => {
  function PluginPanel() {
    const [pathList, setPathList] = useState([]);
    const { callRemote } = api;
    useEffect(() => {
      callRemote({
        type: "org.alexzeng.umi-plugin-swagger-doc.getSwaggerData"
      }).then(({ data }) => {
        setPathList(data);
      });
    }, []);

    const [pathHash, setPathHash] = useState({});
    const { current: onPathChange } = useRef((route, path) => {
      setPathHash(pathHashCurrent => {
        pathHashCurrent[route] = path;
        return { ...pathHashCurrent };
      });
    });
    return (
      <div style={{ padding: 20, overflow: "scroll" }}>
        <Collapse onChange={console.log}>
          {pathList.map(pathItem => {
            const { path, methods, tag } = pathItem;
            return (
              <Panel header={<PathHeader pathItem={pathItem} />} key={path}>
                <PathConfig
                  pathItem={pathItem}
                  onChange={onPathChange}
                  value={pathHash[path]}
                  onGenerate={console.log}
                />
                {methods.map(method => {
                  const { methodName, operationId, summary, tagDesc } = method;
                  return (
                    <PathItem
                      key={operationId}
                      method={method}
                      path={path}
                      onGenerate={console.log}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Collapse>
      </div>
    );
  }

  api.addPanel({
    title: "umi-plugin-swagger-doc",
    path: "/umi-plugin-swagger-doc",
    icon: "home",
    component: PluginPanel
  });
};
