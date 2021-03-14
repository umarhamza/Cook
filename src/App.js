import "./index.scss";
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="table-col col col-8">
          <Table />
          <Carousel />
        </div>
        <div className="sidebar-col col col-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
