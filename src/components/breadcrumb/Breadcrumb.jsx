import { useState } from "react";
import { Link } from "react-router-dom"
import './Breadcrumb.scss'


const Breadcrumb = ({data}) => {
  const breadcrumbDummyData = [
    {name: 'Home', path: '/', activeState: false },
    {name: 'Products', path: '/', activeState: true },
  ];
  const [breadcrumbNav, setSetBreadcrumbNav] = useState(data || breadcrumbDummyData)
  return <ul className="bareadcrumb__container">
  {
    breadcrumbNav.map((item, index) => {
      return <li className="bareadcrumb__list" key={index}>
        <Link to={item.path} className={item.activeState ? "bareadcrumb__list__link active" : "bareadcrumb__list__link"}>
          {item.name}
        </Link>
      </li>
    })
  }
    
    {/* <li className="bareadcrumb__list">
      <Link to="/" className="bareadcrumb__list__link active">Products</Link>
    </li> */}
  </ul>
}

export default Breadcrumb