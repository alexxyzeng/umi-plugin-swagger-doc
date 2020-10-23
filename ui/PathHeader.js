import { useState, useRef } from "react";
import { Button, Row, Select, Input } from "antd";

const { Option } = Select;

function PathHeader({ pathItem }) {
  const { path, tag, routes } = pathItem;

  return (
    <Row justify={"space-between"} align="center">
      <div>{`${path} ${tag}`}</div>
    </Row>
  );
}

export default PathHeader;
