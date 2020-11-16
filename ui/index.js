import { useEffect, useState, useRef, Fragment, useMemo } from "react";
import { Button, Collapse, Input, Row } from "antd";
import PathItem from "./PathItem";
import "./index.css";
import PathHeader from "./PathHeader";
import PathConfig from "./PathConfig";
import EnumItem from "./EnumItem";

// import { IUiApi } from "umi-types";

const { Panel } = Collapse;

/**
 *
 * @param {IUiApi} api
 */
export default api => {
  const { callRemote } = api;
  function PluginPanel() {
    const [pathList, setPathList] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPath, setCurrentPath] = useState(undefined);
    const [pathHash, setPathHash] = useState({});
    useEffect(() => {
      callRemote({
        type: "org.alexzeng.umi-plugin-swagger-doc.getSwaggerData"
      }).then(({ data }) => {
        setPathList(data);
        const pathHashFinal = {};
        data?.forEach(item => {
          const { targetPath, path } = item;
          pathHashFinal[path] = targetPath;
        });
        setPathHash(pathHashFinal);
      });
    }, []);

    const { current: onPathChange } = useRef((route, path) => {
      setPathHash(pathHashCurrent => {
        pathHashCurrent[path] = route;
        return { ...pathHashCurrent };
      });
    });

    const list = useMemo(() => {
      if (!search) {
        return pathList;
      }
      return pathList.filter(pathItem => {
        const { methods, path = "", tag = "" } = pathItem;
        const lowerCasedSearch = (search || "").toLowerCase();
        return (
          path.toLowerCase().includes(lowerCasedSearch) ||
          tag.toLowerCase().includes(lowerCasedSearch)
          // methods.some(method => {
          //   const { name, summary, tag } = method;
          //   return (
          //     name.includes(search) ||
          //     summary.includes(search) ||
          //     tag.includes(search)
          //   );
          // })
        );
      });
    }, [pathList, search]);

    const onGenerate = (pathItem, path, fileName) => {
      callRemote({
        type: "org.alexzeng.umi-plugin-swagger-doc.generateService",
        payload: {
          pathItem,
          path,
          fileName,
          names: methodNameRef.current[pathItem.path]
        }
      }).then(({ data }) => {
        // setPathList(data);
      });
    };

    const methodNameRef = useRef({});

    const { current: onRename } = useRef((method, id, path) => {
      const { operationId } = method;
      if (!methodNameRef.current[path]) {
        methodNameRef.current[path] = {};
      }
      methodNameRef.current[path][operationId] = id;
    });

    const { current: onSearch } = useRef(event => {
      setSearch(event.target.value);
    });

    return (
      <div style={{ padding: 20, overflow: "scroll" }}>
        <Input
          style={{ margin: "24px 0" }}
          placeholder="请输入查找的关键字"
          value={search}
          onChange={onSearch}
        />
        <Collapse value={currentPath} onChange={setCurrentPath}>
          {list.map(pathItem => {
            const { path, methods, tag } = pathItem;
            return (
              <Panel header={<PathHeader pathItem={pathItem} />} key={path}>
                <PathConfig
                  pathItem={pathItem}
                  onChange={onPathChange}
                  value={pathHash[path]}
                  onGenerate={onGenerate}
                />
                {methods.map(method => {
                  const { methodName, operationId, summary, tagDesc } = method;
                  return (
                    <PathItem
                      key={operationId}
                      method={method}
                      path={path}
                      onRename={onRename}
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

  function EnumPanel() {
    const [enumList, setEnumList] = useState([]);
    const [enumHash, setEnumHash] = useState({});
    const enumHashRef = useRef(enumHash);
    useEffect(() => {
      onGenerate();
    }, []);

    useEffect(() => {
      enumHashRef.current = enumHash;
    }, [enumHash]);
    const { current: onGenerate } = useRef(() => {
      callRemote({
        type: "org.alexzeng.umi-plugin-swagger-doc.generateEnums",
        payload: { ...enumHashRef.current }
      }).then(({ data }) => {
        let enumList = [];
        for (let enumKey in data) {
          const enumValue = data[enumKey];
          enumList.push({ defaultValue: enumValue, enumKey });
        }
        setEnumList(enumList);
      });
    });

    const { current: onEnumChange } = useRef((name, key) => {
      enumHashRef.current[key] = name;
      setEnumHash({ ...enumHashRef.current });
    });

    return (
      <Fragment>
        <Row>
          <div>
            <Button typee="primary" onClick={onGenerate}>
              生成Enum
            </Button>
          </div>
        </Row>
        {enumList.map(item => {
          const { defaultValue, enumKey } = item;
          const name = enumHash[enumKey];
          return (
            <EnumItem
              key={enumKey}
              name={name}
              enumKey={enumKey}
              defaultValue={defaultValue}
              onChange={onEnumChange}
            />
          );
        })}
      </Fragment>
    );
  }

  api.addPanel({
    title: "Swagger service",
    path: "/services",
    icon: "home",
    component: PluginPanel
  });

  api.addPanel({
    title: "Enums",
    path: "/enums",
    icon: "home",
    component: EnumPanel
  });
};
