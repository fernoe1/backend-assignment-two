import { useState } from "react";
import { Button, Divider } from "antd";
import UserSection from "./components/UserSection";
import CountrySection from "./components/CountrySection";
import NewsSection from "./components/NewsSection";
import ExchangeSection from "./components/ExchangeSection";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/random-user");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <div
        style={{
          margin: "20px auto", 
          textAlign: "center", 
        }}
      >
        <Button type="primary" onClick={getData} loading={loading}>
          {loading ? "Loading..." : "Load Data"}
        </Button>
      </div>

      {data && (
        <>
          <Divider>User</Divider>
          <UserSection user={data.user} />
          <Divider>Country</Divider>
          <CountrySection country={data.country} />
          <Divider>Exchange</Divider>
          <ExchangeSection exchange={data.exchange} />
          <Divider>News</Divider>
          <NewsSection articles={data.articles} />
        </>
      )}
    </>
  );
}

export default App;
