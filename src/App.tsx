import {useState} from "react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Search from "./components/Search"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import OrderPanel from "./components/OrderPanel"
import { useProducts } from "./hooks/useProducts"
function App() {

  const [panelOpen, setPanelOpen] = useState(false);
  const { products } = useProducts();

  // Sort products by category
  const productCategories = Array.from(new Set(products.map(product => product.category)));


  return (
    <>
      <Header
        setPanelOpen={setPanelOpen}
      />
      <OrderPanel
        panelOpen={panelOpen}
        setPanelOpen={setPanelOpen}
       />
      <Banner />
      <Search />
      {/* Render a ProductList for each unique category */}
      {
        productCategories.map((category, i) => (
          <ProductList
            key={i}
            category={category}
            products={products.filter(product => product.category == category)}
          />
        ))
      }
      <Footer/>
    </>
  )
}

export default App
