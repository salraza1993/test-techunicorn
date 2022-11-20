import axios from 'axios'
import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext({});

const API_BASE_URL = "https://fakestoreapi.com";

export function ProductContextProvider({ children }) {

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    axios.get(`${API_BASE_URL}/products`)
    .then(response => {
      const data = response.data;
      setAllProducts(data)
    }).catch(error => {
      console.log(error);
    });
  }, [])


  // product filtering categorywise
  const setProductsByCategory = (category) => {
    setSelectedCategory(category)
    axios.get(`${API_BASE_URL}/products/category/${category}`)
    .then(response => {
      const data = response.data;
      setFilteredProducts(data)
    }).catch(error => {
      console.log(error);
    });
  }
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

  // Product Sorting
  const setSortedProducts = (type) => {
    axios.get(`${API_BASE_URL}/products?sort=${type}`)
    .then(response => {
      const data = response.data;
      setAllProducts(data)
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {}, [allProducts]);

  return <productContext.Provider value={{
    API_BASE_URL,
    allProducts, 
    selectedCategory,
    filteredProducts,
    setSortedProducts, 
    setProductsByCategory, 
    searchQuery,
    resetFilterCategory,
    setSearchQuery
  }}>{children}</productContext.Provider>
}


export function useProductContext() {
  return useContext(productContext)
}