import { useEffect, useState } from "react";
import { Button, Collapse, Tag, Row, Input } from "antd";

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
    return (
      <div style={{ padding: 20, overflow: "scroll" }}>
        <Collapse>
          {pathList.map(pathItem => {
            const { path, methods, tag } = pathItem;
            return (
              <Panel header={`${path} ${tag}`} key={path}>
                {methods.map(method => {
                  const { methodName, operationId, summary, tagDesc } = method;
                  // return <div key={operationId}>{summary}</div>;
                  return (
                    <Row>
                      <div>
                        <Tag color="#f50">{methodName}</Tag>
                      </div>
                      <div>
                        方法名: <Input value={operationId} />
                      </div>
                      <div>{summary}</div>
                      <div>
                        {tagDesc?.map(tag => (
                          <Tag key={tag} color="#108ee9">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </Row>
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
