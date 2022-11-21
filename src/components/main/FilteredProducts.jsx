import React from 'react'
import Product from './Product'

function FilteredProducts({searchFilteredProducts, searchQuery, addToCart}) {
  console.log(searchQuery)
  return (
    <>
      {
        searchFilteredProducts.length === 0 && searchQuery ? 
        <div className="bg-light d-flex justify-content-center align-items-center py-5">
          <h5 className="bs-dark mb-0 py-5">No Products for the searched keyword</h5>
        </div>
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