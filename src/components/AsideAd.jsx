import rightArrow from './../assets/images/chevron-right.svg'

function AsideAd() {
  return (
    <div className="aside__ad">
      <h3 className="marriweather fw-bold">March Discount</h3>
      <p>Up to 70% Off for All Items in March</p>
      <button className='btn btn-light px-3 d-flex gap-3 align-items-center'>
        Got It 
        <img src={rightArrow} alt="Right Arrow" />
      </button>
    </div>
  )
}

export default AsideAd