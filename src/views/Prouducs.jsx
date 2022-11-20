import ProductsContainer from '../components/main/ProductsContainer';
import Aside from './../components/aside/Aside'
import HeroBanner from '../components/herobanner/HeroBanner';

function Prouducs({
  getAllProducts, 
  setSortedProducts,
  setProductsByCategory,
  setSearchQuery,
  searchQuery,
  selectedCategory,
  resetFilterCategory,
  addToCart,
  searchFilteredProducts,
}) {
  return <>
    <section className='product__listing__section'>
      <div className="container">
        <HeroBanner heading={'Shop'} />
        <div className="product__listing__container [ d-flex gap-5 ]">
          <Aside 
            setProductsByCategory={setProductsByCategory} 
            selectedCategory={selectedCategory} 
            resetFilterCategory={resetFilterCategory}
          />
          <ProductsContainer 
            products={getAllProducts} 
            setSortedProducts={setSortedProducts} 
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            resetFilterCategory={resetFilterCategory}
            addToCart={addToCart}
            searchFilteredProducts={searchFilteredProducts}
          />
        </div>
      </div>
    </section>
  </>
}

export default Prouducs;