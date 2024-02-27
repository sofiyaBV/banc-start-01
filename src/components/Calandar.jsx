import { DatePicker, Space } from "antd";
import React from "react";
import { useApp } from "../utils/Context";
const { RangePicker } = DatePicker;
export default function Calandar() {
  const { setStartDate, setEndDate } = useApp();
  function handleGedDate(e) {
    console.dir(e);
    // setStartDate(
    //   e[0].$M.length !== 2 || e[0].$D.length !== 2
    //     ? `${e[0].$y}0${e[0].$M + 1}0${e[0].$D}`
    //     : `${e[0].$y}${e[0].$M + 1}${e[0].$D}`
    // );
    // setEndDate(
    //   e[1].$M.length !== 2 || e[1].$D.length !== 2
    //     ? `${e[1].$y}0${e[1].$M + 1}0${e[1].$D}`
    //     : `${e[1].$y}${e[1].$M + 1}${e[1].$D}`
    // );
  }
  return (
    <div>
      <Space direction="vertical" size={12} style={{ marginBottom: "25px" }}>
        <RangePicker
          onFocus={(_, info) => {
            console.log("Focus:", info.range);
          }}
          onBlur={(_, info) => {
            console.log("Blur:", info.range);
          }}
          onChange={handleGedDate}
        />
      </Space>
    </div>
  );
}
