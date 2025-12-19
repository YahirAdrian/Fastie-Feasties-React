import {useState} from "react"

import Header from "./components/Header"
import Banner from "./components/Banner"
import Search from "./components/Search"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import OrderPanel from "./components/OrderPanel"


import { useProducts } from "./hooks/useProducts"
import { OrderProvider } from "./context/OrderContext"
function Home() {

  const [panelOpen, setPanelOpen] = useState<boolean>(false);
  const { products } = useProducts();

  // Sort products by category
  const productCategories = Array.from(new Set(products.map(product => product.category)));


  return (
    <>
      <Header
        setPanelOpen={setPanelOpen}
      />
      <Banner />
      <Search />
      <OrderProvider>
        <OrderPanel
          panelOpen={panelOpen}
          setPanelOpen={setPanelOpen}
          />
        {
          // Rednder a product List for each category
          productCategories.map((category, i) => (
            <ProductList
            key={i}
            category={category}
            products={products.filter(product => product.category == category)}
            panelOpen={panelOpen}
            setPanelOpen={setPanelOpen}
            />
          ))
        }
      </OrderProvider>
      <Footer/>
    </>
  )
}

export default Home
