import Product from './main/Product';
import { useState } from 'react';

function RecommendedItems({getAllProducts}) {
  return <>
    <hr className='mt-5' />
    <section className="recommended__item__container pt-3">
      <div className="container">
        <h2 className='fw-1 merriweather fw-bold mb-4 pb-3'>Recommended for you</h2>
        <div className="row">
          {
            getAllProducts.slice(0, 4).map((item, index) => {
              return <div className="col-12 col-md-6 col-xl-3" key={index}>
                <Product data={item} />
              </div>
            })
          }
        </div>
      </div>
    </section>
  </>
}

export default RecommendedItems