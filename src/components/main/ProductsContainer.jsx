import SearchBar from '../SearchBar'
import listViewIcon from './../../assets/images/list.svg'
import gridViewIcon from './../../assets/images/grid.svg'
import './Main.scss'
import Product from './Product'
import FilteredProducts from './FilteredProducts'

function ProductsContainer({
  products, 
  setSortedProducts,
  setSearchQuery,
  searchQuery,
  selectedCategory,
  resetFilterCategory,
  addToCart,
  searchFilteredProducts
}) {
  
  const productSortingHandler = (e) => {setSortedProducts(e.target.value) }

  return <main className="main__container">
    <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />

    <div className="main__filterable__elements [ d-flex justify-content-between align-items-center mb-4 ]">
      <div className="left__block">
        <div className="total__result d-flex align-items-center gap-3">
          {
            selectedCategory && <button className="btn btn-sm btn-dark d-flex gap-3 py-0 align-items-center">
              {selectedCategory.split(' ').map((ltr) => ltr[0].toUpperCase() + ltr.substr(1).toLowerCase()).join(' ')}
              <span className="fs-5" onClick={resetFilterCategory}>&times;</span>
            </button>
          }
          <p className='mb-0'>
            Showing <strong>{ searchFilteredProducts?.length > 0 ? searchFilteredProducts.length :  products?.length } Results</strong>
          </p>
        </div>
      </div>
      <div className="right__block [ d-flex align-items-center gap-3 ]">
        <div className="sorting [ d-flex align-items-center gap-3 ]">
          <p className="m-0">Sort</p>
          <select className="form-select" onChange={(e) => productSortingHandler(e)}>
            <option value="asc">Newest</option>
            <option value="desc">Oldest</option>
          </select>
        </div>
        <div className="view__type">
          <img src={listViewIcon} alt="List View Icon" />
        </div>
        <div className="view__type">
          <img src={gridViewIcon} alt="Grid View Icon" />
        </div>
      </div>
    </div>

    <section className="product__list__section">
      <div className="row ">
        {
          searchQuery.length > 2 ? 
          <FilteredProducts searchFilteredProducts={searchFilteredProducts} searchQuery={searchQuery} addToCart={addToCart} />
          : products && products.slice(0, 30).map((item) => {
            return <div className="col-12 col-md-6 col-xl-4 d-flex" key={item.id}>
              <Product data={item} addToCart={addToCart} />
            </div>
          })
        }
      </div>
    </section>
  </main>
}

export default ProductsContainer