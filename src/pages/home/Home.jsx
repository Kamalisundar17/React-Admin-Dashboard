import Featured from "../../components/featuredInfo/Featured";
import "./home.css";
import Chart from "../../components/chart/Chart"
import {userdata} from "../../dummydata"
import Widgetlg from "../../components/widgetlg/Widgetlg";
import Widgetsm from "../../components/widgetsm/Widgetsm";

export default function Home() {
  return (
    <div className="home">
      <Featured/>
      <Chart data={userdata} title="User Analytics" dataKey = "name" grid  />
      <div className="homewidgets">
        <Widgetsm/>
         <Widgetlg/>
      </div>
     
    </div>
  )
}
