import { useState, useRef, useCallback } from "react";
import { Collapse, Tag, Row, Input, Button } from "antd";

function PathItem({ method, onGenerate, path }) {
  const { methodName, operationId, summary, tagDesc } = method;
  const [id, setId] = useState(operationId);
  const { current: onIdChange } = useRef(event => {
    setId(event.target.value);
  });

  const onGenerateService = useCallback(() => {
    if (!onGenerate) {
      return;
    }
    onGenerate(method, id, path);
  }, [id, onGenerate]);

  return (
    <Row align="middle">
      <div>
        <Tag color="#f50">{methodName}</Tag>
      </div>
      <div>{`${summary} ${operationId}`}</div>
      <div>
        <Input prefix="方法名" value={id} onChange={onIdChange} />
      </div>
      <div>
        {tagDesc?.map(tag => (
          <Tag key={tag} color="#108ee9">
            {tag}
          </Tag>
        ))}
      </div>
      <div>
        <Button onClick={onGenerateService}>生成</Button>
      </div>
    </Row>
  );
}

export default PathItem;
