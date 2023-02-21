import ProductImage from "./components/ProductImage";
import Description from "./components/Description";
import ProductTitle from "./components/ProdectTitle";
import ProdectPrice from "./components/ProductPrice";
import Companylogo from "./components/CompanyLogo";
import "./App.css";
function App() {
  return (
    <div className="App">
      <nav>
        <Companylogo/>
      </nav>
      <section>
        <ProductImage />
      <div id="right">
        <ProductTitle/>
        <ProdectPrice />
        <Description/>
      </div>
      </section>
    </div>
  );
}

export default App;
