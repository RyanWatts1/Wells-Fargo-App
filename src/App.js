import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch(`https://date.nager.at/api/v2/publicholidays/2020/US`)
      .then((response) => response.json())
      .then((holidays) => setHolidays(holidays));
  }, []);

  return (
    <div className="bg-slate-600">
      <header className="App-header">
        <h2>Holidays</h2>
        {holidays.map((holiday) => (
          <Card key={holiday.name} holiday={holiday} />
        ))}
      </header>
    </div>
  );
}

export default App;
