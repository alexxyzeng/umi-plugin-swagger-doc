import { useState, useRef, useCallback } from "react";
import { Collapse, Tag, Row, Input, Button, message } from "antd";
import "./index.css";

function PathItem({ method, onGenerate, path }) {
  const { methodName, operationId, summary, tagDesc } = method;
  const [id, setId] = useState(operationId);
  const { current: onIdChange } = useRef(event => {
    setId(event.target.value);
  });

  const onRename = useCallback(() => {
    if (!onGenerate) {
      return;
    }
    if (!id) {
      return message.error("请输入修改后的名称");
    }
    onGenerate(method, id, path);
  }, [id, onGenerate]);

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
      <div>
        <Button onClick={onRename}>重命名</Button>
      </div>
    </Row>
  );
}

export default PathItem;
