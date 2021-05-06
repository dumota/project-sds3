import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="text-primary py-3">DashBoard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        <DataTable></DataTable>
      </div>
      <Footer></Footer>
    </>
    //fragment <> avisando pro react que tudo é  uma coisa só pois a função só retorna 1 coisa
    //shift + alt +f formata a tela
  );
}

export default App;
