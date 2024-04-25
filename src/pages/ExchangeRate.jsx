import React, { useEffect } from "react";
import { useApp } from "../utils/Context";
import BarChart from "../components/BarChart";
import PollorChart from "../components/PollorChart";
import Calandar from "../components/Calandar";
import groupByDate from "../utils/groupByDate";
import LineChart from "../components/LineChart";
import groupByCategory from "../utils/groupByCategory";
import groupByCategoryYeary from "../utils/groupByCategoryYear";

export default function ExchangeRate() {
  const { balance } = useApp();
  console.log(balance);

  return (
    <div>
      <Calandar />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <BarChart propsData={groupByDate(balance)} />
        <PollorChart propsData={groupByCategory(balance)} />
      </div>
      <LineChart propsData={groupByCategoryYeary(balance)} />
    </div>
  );
}
