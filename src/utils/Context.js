import { createContext, useContext, useState } from "react";
import { fetch_config } from "./Fetch_consig";
//*https://bank.gov.ua/NBU_Exchange/exchange_site?start=20200101&end=20240218&valcode=usd&sort=exchangedate&order=desc&json
const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};
export const AppProvider = ({ children }) => {
  const [rate, setRate] = useState([]);
  const [starttDate, setStartDate] = useState();
  const [endrtDate, setEndDate] = useState();

  const rateData = async (...obj) => {
    try {
      const response = await fetch(
        `${fetch_config.BASE_URL}${fetch_config.RATE_PATH}&${obj[0]}`
      );
      const data = await response.json();
      setRate(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider value={(rate, rateData, setStartDate, setEndDate)}>
      {children}
    </AppContext.Provider>
  );
};
