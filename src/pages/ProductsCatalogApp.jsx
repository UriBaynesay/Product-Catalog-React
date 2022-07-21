import { useEffect } from "react"
import { useState } from "react"
import { ProductsFilter } from "../cmp/products-filter"
import { ProductsList } from "../cmp/products-list"
import { productsCatalogService } from "../services/productsCatalog.service";

export const ProductsCatalogApp = () => {
  const [stores, setStores] = useState(null)

  useEffect(()=>{
    setStores(productsCatalogService.query())
  },[])

  const setFilter = (type, value) => {}

  return (
    <div className="home-page-container">
      <ProductsFilter setFilter={setFilter} />
      <ProductsList stores={stores} />
    </div>
  )
}
