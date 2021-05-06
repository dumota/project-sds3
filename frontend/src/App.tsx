import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="text-primary">Hello world!</h1>
        <DataTable></DataTable>
      </div>
      <Footer></Footer>
    </>
    //fragment <> avisando pro react que tudo é  uma coisa só pois a função só retorna 1 coisa
    //shift + alt +f formata a tela
  );
}

export default App;
