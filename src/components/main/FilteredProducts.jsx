import React from 'react'
import Product from './Product'

function FilteredProducts({searchFilteredProducts, searchQuery, addToCart}) {
  console.log(searchQuery)
  return (
    <>
      {
        searchFilteredProducts.length === 0 && searchQuery ? 
        <h1>No Products for the searched keyword</h1>
        :
        searchFilteredProducts.map((item) => {
          return <div className="col-12 col-md-6 col-xl-4 d-flex" key={item.id}>
            <Product data={item} addToCart={addToCart} />
          </div>
        }) 
      }
    </>
  )
}

export default FilteredProducts