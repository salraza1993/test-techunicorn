import Breadcrumb from "../breadcrumb/Breadcrumb"
import './HeroBanner.scss'

function HeroBanner({heading, breadcrumb, banner}) {
  return <section className="hero__banner__section mb-5">
    <div className="container">
      <div className="hero__banner__container">
        <div className="hero__banner__content">
          <Breadcrumb />
          <h2 className="fs-1 marriweather fw-bold mt-3">{heading || "Banner Heading"}</h2>
        </div>
        <div className="hero__banner__block">
          <div className="hero__banner__block__image">
            <img src={banner || "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5"} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>  
}

export default HeroBanner