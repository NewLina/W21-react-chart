import './App.css';
import { Chart } from "react-google-charts";
import {data, options} from './data.js';

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
    </div>
  );
}

export default App;
