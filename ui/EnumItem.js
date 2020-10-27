import { useRef, Fragment } from "react";
import { Row, Input } from "antd";
import "./index.css";

function EnumItem({ name, defaultValue, onChange, enumKey }) {
  const { name: enumName, def } = defaultValue;
  const { current: onEnumNameChange } = useRef(event => {
    const newName = event.target.value;
    onChange(newName, enumKey);
  });
  return (
    <Fragment>
      <Row align="middle">
        <div>{enumKey}</div>
        <div>
          <Input
            style={{ minWidth: 640 }}
            prefix="枚举名: "
            value={name !== undefined ? name : enumName}
            onChange={onEnumNameChange}
          />
        </div>
      </Row>
      <Row>
        <div
          style={{
            color: "yellowgreen",
            marginBottom: 12,
            padding: 12,
            paddingTop: 4
          }}
        >
          {def}
        </div>
      </Row>
    </Fragment>
  );
}

export default EnumItem;
