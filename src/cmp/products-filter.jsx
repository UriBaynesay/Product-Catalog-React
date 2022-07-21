import { useState } from "react"
import { productsCatalogService } from "../services/productsCatalog.service"

export const ProductsFilter = ({ setFilter }) => {
  const [filterBy, setFilterBy] = useState({
    priceFilterMin: "",
    priceFilterMax: "",
    genderFilter: "",
  })
  const { priceFilter, genderFilter } = productsCatalogService.getFilters()

  const handleChange = ({ target }) => {
    setFilterBy({ ...filterBy, [target.name]: target.value })
  }

  return (
    <section className="products-filter-container">
      <label>
        Min price :{" "}
        <select
          name="priceFilterMin"
          value={filterBy.priceFilterMin}
          onChange={handleChange}
        >
          <option value=""></option>
          {priceFilter.map((price) => {
            return (
              <option key={price.TagId} value={price.Value}>
                {price.DisplayText}
              </option>
            )
          })}
        </select>
      </label>

      <label>
        Max price :{" "}
        <select
          name="priceFilterMax"
          value={filterBy.priceFilterMax}
          onChange={handleChange}
        >
          <option value=""></option>
          {priceFilter.map((price) => {
            return (
              <option key={price.TagId} value={price.Value}>
                {price.DisplayText}
              </option>
            )
          })}
        </select>
      </label>

      <select
        name="genderFilter"
        value={filterBy.genderFilter}
        onChange={handleChange}
      >
        <option value=""></option>
        {genderFilter.map((gender) => {
          return (
            <option key={gender.TagId} value={gender.TagId}>
              {gender.DisplayText}
            </option>
          )
        })}
      </select>
      <button onClick={() => setFilter(filterBy)}>Filter</button>
    </section>
  )
}
