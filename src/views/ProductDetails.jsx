import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroBanner from '../components/herobanner/HeroBanner'
import './ProductDetails.scss'

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  useEffect(() => {
   axios.get('https://fakestoreapi.com/products/'+id).then((response) => {
    if(response.data) {
      setProduct(response.data)
    }
   }).catch((error) => {
    console.error(error)
   })
  }, [])
  return (
    <>
      <HeroBanner heading={'Product Details'} banner={"https://images.unsplash.com/photo-1490481651871-ab68de25d43d"} />
      <section className="product__details__section">
        <div className="container">
          <div className="product__details__container">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-5">
                <div className="product__details__image">
                  <img src={product.image} alt="" width="100%" />
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="product__details__content">
                  <h2 className='fw-1 merriweather fw-bold'>{product?.title}</h2>
                  <p>Availability: <strong>50</strong> in Stocks</p>
                  <div className="d-flex justify-content-between align-items-center mt-1 mb-3">
                    <div className="d-flex justify-content-between align-items-center merriweather gap-4">
                      <h3 className='text-primary fw-bold'>${product?.price}</h3>
                      <h5 className='text-decoration-line-through text-muted'>$500.00</h5>
                    </div>
                    <button className='btn btn-light border'>Share</button>
                  </div>
                  <ul className='product__info mb-3'>
                    <li>
                      <span>SKU</span>
                      <span>: AAX355</span>
                    </li>
                    <li>
                      <span>Category</span>
                      <span>: Dresses</span>
                    </li>
                    <li>
                      <span>Tags</span>
                      <span>: Fashion, Classic, Blouses, Dresses</span>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center my-3 border-top border-bottom py-2">
                    <select className="form-select w-25">
                      <option value="asc">Select Size</option>
                      <option value="sm">Small</option>
                      <option value="md">Medium</option>
                      <option value="lg">Large</option>
                      <option value="xl">X-Large</option>
                    </select>
                    <div className="quantity">
                      <span className='minus'>-</span>
                      <span className='value'>2</span>
                      <span className='plus'>+</span>
                    </div>
                    <button className="btn btn-light border white-space-nowrap">Add Note</button>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-primary btn-lg d-flex align-items-center gap-3 px-5">
                      Add To Cart
                      <svg width="25" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6667 17.3333H7.184L7.628 16H21.0053L24.4347 4H4.85867L3.65867 0H0V2.66667H1.67467L5.268 14.6467L4.324 17.4787C3.60214 17.6686 2.94796 18.057 2.43567 18.5999C1.92339 19.1427 1.57351 19.8183 1.42572 20.55C1.27794 21.2816 1.33818 22.04 1.59959 22.7392C1.86101 23.4383 2.31314 24.0502 2.9047 24.5054C3.49625 24.9606 4.20355 25.2409 4.94633 25.3145C5.68911 25.3881 6.43765 25.252 7.10702 24.9217C7.77639 24.5914 8.33979 24.0801 8.73331 23.4459C9.12682 22.8116 9.33469 22.0798 9.33333 21.3333C9.32891 20.8781 9.24592 20.427 9.088 20H14.912C14.7541 20.427 14.6711 20.8781 14.6667 21.3333C14.6667 22.1245 14.9013 22.8978 15.3408 23.5556C15.7803 24.2134 16.405 24.7261 17.1359 25.0289C17.8668 25.3316 18.6711 25.4108 19.447 25.2565C20.223 25.1021 20.9357 24.7212 21.4951 24.1618C22.0545 23.6024 22.4355 22.8896 22.5898 22.1137C22.7441 21.3378 22.6649 20.5335 22.3622 19.8026C22.0594 19.0717 21.5467 18.447 20.8889 18.0075C20.2312 17.5679 19.4578 17.3333 18.6667 17.3333V17.3333ZM20.8987 6.66667L18.9947 13.3333H7.66133L5.66133 6.66667H20.8987ZM6.66667 21.3333C6.66667 21.597 6.58847 21.8548 6.44196 22.0741C6.29545 22.2934 6.08721 22.4643 5.84358 22.5652C5.59994 22.6661 5.33185 22.6925 5.07321 22.641C4.81457 22.5896 4.57699 22.4626 4.39052 22.2761C4.20405 22.0897 4.07707 21.8521 4.02562 21.5935C3.97417 21.3348 4.00058 21.0667 4.10149 20.8231C4.20241 20.5795 4.37331 20.3712 4.59257 20.2247C4.81184 20.0782 5.06963 20 5.33333 20C5.68696 20 6.02609 20.1405 6.27614 20.3905C6.52619 20.6406 6.66667 20.9797 6.66667 21.3333ZM18.6667 22.6667C18.403 22.6667 18.1452 22.5885 17.9259 22.442C17.7066 22.2955 17.5357 22.0872 17.4348 21.8436C17.3339 21.5999 17.3075 21.3319 17.359 21.0732C17.4104 20.8146 17.5374 20.577 17.7239 20.3905C17.9103 20.2041 18.1479 20.0771 18.4065 20.0256C18.6652 19.9742 18.9333 20.0006 19.1769 20.1015C19.4205 20.2024 19.6288 20.3733 19.7753 20.5926C19.9218 20.8118 20 21.0696 20 21.3333C20 21.687 19.8595 22.0261 19.6095 22.2761C19.3594 22.5262 19.0203 22.6667 18.6667 22.6667Z" fill="currentcolor"/>
                      </svg>
                    </button>
                    <button className="btn btn-outline-primary btn-lg d-flex align-items-center">
                      <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0001 25.7609L2.6868 14.4476C1.18638 12.9473 0.343387 10.9125 0.343262 8.79072C0.343137 6.66893 1.18589 4.634 2.68613 3.13358C4.18638 1.63316 6.22121 0.790164 8.343 0.790039C10.4648 0.789914 12.4997 1.63267 14.0001 3.13291C15.5013 1.63437 17.5357 0.792711 19.6568 0.792711C21.7779 0.792711 23.8123 1.63437 25.3135 3.13291V3.13291C26.8114 4.6344 27.6526 6.66869 27.6526 8.78958C27.6526 10.9105 26.8114 12.9448 25.3135 14.4462L14.0001 25.7609ZM8.3428 3.45691C7.28786 3.45687 6.2566 3.76969 5.37946 4.35581C4.50232 4.94192 3.81871 5.775 3.41508 6.74968C3.01145 7.72435 2.90594 8.79683 3.1119 9.83147C3.31786 10.8661 3.82603 11.8164 4.57213 12.5622L14.0001 21.9902L23.4281 12.5622C23.9697 12.0328 24.3922 11.3941 24.6677 10.6886C24.9431 9.98314 25.0652 9.22709 25.0257 8.47078C24.9862 7.71447 24.7861 6.97524 24.4387 6.30228C24.0913 5.62932 23.6046 5.03807 23.0109 4.56786C22.4172 4.09766 21.7301 3.75929 20.9955 3.57527C20.2609 3.39126 19.4954 3.36581 18.7502 3.50063C18.005 3.63544 17.297 3.92743 16.6734 4.35716C16.0497 4.7869 15.5248 5.34451 15.1335 5.99291L14.0001 7.82224L12.8668 5.99291C12.399 5.21296 11.7353 4.56885 10.9418 4.12447C10.1482 3.6801 9.25227 3.45089 8.3428 3.45958V3.45691Z" fill="currentcolor"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className='my-5' />
            <div className="product__details__discription [ d-flex gap-5 ]">
              <div className='pe-5'>
                <h2 className='merriweather text-primary fw-bold mb-4'>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                </p>
              </div>
              <div className='product__details__discription__fabric__details'>
                <h2 className='merriweather text-primary fw-bold mb-4'>Fabric Details</h2>
                <ul className='product__details__discription__fabric__details__list'>
                  <li>100% Cotton</li>
                  <li>Quick Dry</li>
                  <li>Ties as Shoulder</li>
                  <li>Accusantium doloremque </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails