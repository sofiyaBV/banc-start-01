import React, { useEffect } from "react";
import { useApp } from "../utils/Context";
import BarChart from "../components/BarChart";
import PollorChart from "../components/PollorChart";
import Calandar from "../components/Calandar";

export default function ExchangeRate() {
  const { rate, rateData } = useApp();
  const fetchRateData = async () => {
    try {
      const result = await rateData(
        "start=20200101&end=20240218&valcode=usd&sort=exchangedate&order=desc&json"
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRateData();
  }, []);
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
        <BarChart />
        <PollorChart />
      </div>
    </div>
  );
}
