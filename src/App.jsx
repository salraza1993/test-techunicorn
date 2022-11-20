import { Route, Routes } from 'react-router-dom'
import Cart from './views/Cart'
import Prouducs from './views/Prouducs'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecommendedItems from './components/RecommendedItems'
import Wishlist from './views/Wishlist'
import ProductDetails from './views/ProductDetails'

function App() {
  const API_BASE_URL = "https://fakestoreapi.com";
  const [getAllProducts, setAllProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilteredProducts, setSearchFilteredProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("");

  // ======================== cart ======================== //
  const [cartItems, setCartItems] = useState([]);
  let alreadyExists;

  // ======================== Fetching all products ======================== //
  useEffect(() => {
    axios.get(`${API_BASE_URL}/products`)
    .then(response => {
      const data = response.data;
      setAllProducts(data)
    }).catch(error => {
      console.log(error);
    });
  }, []);

  // ======================== product filtering categorywise ======================== //
  const setProductsByCategory = (category) => {
    console.log(category);
    setSelectedCategory(category)
    axios.get(`${API_BASE_URL}/products/category/${category}`)
    .then(response => {
      const data = response.data;
      setFilteredProducts(data)
      setAllProducts(data)
    }).catch(error => {
      console.log(error);
    });
  }
  // ======================== Reset filter ===================== //
  const resetFilterCategory = () => {
    setSelectedCategory('')
    axios.get(`${API_BASE_URL}/products`)
    .then(response => {
      const data = response.data;
      setAllProducts(data)
    }).catch(error => {
      console.log(error);
    });
  }

  // ======================== Product Sorting ======================== //
  const setSortedProducts = (type) => {
    setSelectedCategory('')
    axios.get(`${API_BASE_URL}/products?sort=${type}`)
    .then(response => {
      const data = response.data;
      setAllProducts(data)
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {}, [getAllProducts]);

  // ======================== Adding to card ======================== //
  const addToCart = (productId) => {
    console.log(productId);
    alreadyExists = cartItems.some(product => product.id === productId)
    if(!alreadyExists) {
      const cartData = getAllProducts.find(product => product.id === productId);
      setCartItems([
        {...cartData, quantity: 1}, 
        ...cartItems
      ])
    }
  }

  // ======================== Removing from cart ======================== //
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(product => product.id !== productId))
  }
  useEffect(() => { }, [cartItems]);

  // ======================== Search based filtering ======================== //
  const setSearchedProducts = () => {
    if(searchQuery && searchQuery.length > 2) {
      const searchedProducts = getAllProducts.filter(product => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase())
      })
      setSearchFilteredProducts(searchedProducts)
    } else if(!searchQuery) {
      setAllProducts(getAllProducts)
      setSearchFilteredProducts([])
    }
  }
  useEffect(() => {
    setSearchedProducts()
  }, [searchQuery]);

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Routes>
        <Route path='/' element={
          <Prouducs 
            setSortedProducts={setSortedProducts}
            getAllProducts={getAllProducts} 
            setProductsByCategory={setProductsByCategory}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            resetFilterCategory={resetFilterCategory}
            addToCart={addToCart}
            searchFilteredProducts={searchFilteredProducts}
          />
        } />
        <Route path='/cart' element={
          <Cart setCartItems={setCartItems} cartItems={cartItems} removeFromCart={removeFromCart} />
        } />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
      <RecommendedItems getAllProducts={getAllProducts} />
      <Footer />
    </div>
  )
}

export default App
