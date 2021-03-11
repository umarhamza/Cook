import "./index.scss";
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-8">
          <Table />
        </div>
        <div className="sidebar-col col col-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
