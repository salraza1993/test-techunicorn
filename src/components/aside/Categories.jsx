import { useEffect, useState } from 'react'
import axios from 'axios'
import arrowRight from './../../assets/images/chevron-right.svg'

function Categories({setProductsByCategory, selectedCategory, resetFilterCategory}) {
  const API_BASE_URL = "https://fakestoreapi.com";
  const [categories, setCategories] = useState([])

  const [activeCatrgory, setActiveCategory] = useState();

  const titleCase = (str) => {
    str.split(' ').map((letter) => letter[0].toUpperCase() + letter.slice(1)).join(' ')
  }

  const filterHandler = (type) => {
    console.log(type);
    setProductsByCategory(type);
    // setActiveCategory(type);
  }


  useEffect(() => {
    axios.get(`${API_BASE_URL}/products/categories`)
    .then(response => {
      const data = response.data;
      setCategories(data)
    }).catch(error => {
      console.log(error);
    });
  }, [])
  useEffect(() => {}, [categories])

  return <>
    <ul className="filter__categories">
      {
        selectedCategory && <li onClick={resetFilterCategory} className="filter__categories__list btn btn-sm btn-danger d-flex gap-3 py-0 justify-content-center align-items-center mb-2">
          Clear Filter
          <span className="fs-5">&times;</span>
        </li>
      }
      {
        categories?.map((item, index) => {
          return <li className={`filter__categories__list ${selectedCategory === item ? 'active': 'filter__categories__list'}`} 
            key={index} onClick={e => filterHandler(item)}>
            {item.split(' ').map((letter) => letter[0].toUpperCase() + letter.slice(1)).join(' ')}
            <img src={arrowRight} alt="Right Arrow" />
          </li>
        })
      }
      
    </ul>
  </>
}


export default Categories