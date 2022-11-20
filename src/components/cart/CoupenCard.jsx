import './CouponCard.scss'
function CoupenCard() {
  return <div className="coupon__card__container">
    <h3 className="mb-3 merriweather fw-bold">Have a Coupon?</h3>
    <input type="text" id="" placeholder="Enter coupon code..." />
    <button type="button" className="btn btn-primary px-4">Apply Coupon</button>
  </div>
}

export default CoupenCard