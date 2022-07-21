import { useEffect } from "react"
import { useState } from "react"
import { ProductsFilter } from "../cmp/products-filter"
import { ProductsList } from "../cmp/products-list"
import { productsCatalogService } from "../services/productsCatalog.service"

export const ProductsCatalogApp = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = (filterBy = null) => {
    setProducts(productsCatalogService.query(filterBy))
  }

  const setFilter = (filterBy) => {
    loadProducts({
      priceFilter: {
        max: filterBy.priceFilterMax,
        min: filterBy.priceFilterMin,
      },
      genderFilter: filterBy.genderFilter,
    })
  }

  return (
    <div className="home-page-container">
      <ProductsFilter setFilter={setFilter} />
      <ProductsList products={products} />
    </div>
  )
}
