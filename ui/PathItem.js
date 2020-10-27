import { useState, useRef, useCallback } from "react";
import { Collapse, Tag, Row, Input, Button, message } from "antd";
import "./index.css";

function PathItem({ method, onRename, path }) {
  const { methodName, operationId, summary, tagDesc, name } = method;
  const [id, setId] = useState(name);
  const { current: onIdChange } = useRef(event => {
    const id = event.target.value;
    setId(id);
    onRename(method, id, path);
  });

  const onRenameMethod = useCallback(() => {
    if (!onRename) {
      return;
    }
    if (!id) {
      return message.error("请输入修改后的名称");
    }
    onRename(method, id, path);
  }, [id, onRename, onRename]);

  return (
    <Row align="middle">
      <div>
        <Tag color="#f50">{methodName}</Tag>
      </div>
      <div>
        <Tag key={operationId} color="#108ee9">
          {operationId}
        </Tag>
      </div>
      <div>{`${summary}`}</div>
      <div>
        <Input prefix="方法名" value={id} onChange={onIdChange} />
      </div>
      {/* <div>
        <Button onClick={onRenameMethod}>重命名</Button>
      </div> */}
    </Row>
  );
}

export default PathItem;
