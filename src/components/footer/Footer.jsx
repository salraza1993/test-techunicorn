import './Footer.scss'
import footerLogo from './../../assets/images/logo-white.svg'
import map from './../../assets/images/map.svg'
import envelop from './../../assets/images/envelop.svg'
import phoneWhite from './../../assets/images/phone-white.svg'
import { Link } from 'react-router-dom'


function Footer() {
  const socialMedia = [ "Facebook", "Twitter", "Instagram", "Youtube" ]
  const footerContactDetails = [ 
    {
      icon: map,
      content: "8819 Ohio St. South Gate, California 90280"
    },
    {
      icon: phoneWhite,
      content: "+271 386-647-3637"
    },
    {
      icon: envelop,
      content: "ourstudio@hello.com"
    },
  ]
  return <footer>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="footer__content">
            <div className="footer__logo mb-4">
              <img src={footerLogo} alt="Footer White Logo" width="220" />
            </div>
            <p className="fs-6  pe-lg-5">
              OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America
            </p>
            <p>Copyright Tanah Air Studio</p>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="footer__links">
                <h5 className="mb-4">Our Social Media</h5>
                <ul className="links">
                  {
                    socialMedia.map((item, index) => { 
                      return <li key={index}><Link to="#">{item}</Link></li> 
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer__links">
                <h5 className="mb-4">Our Social Media</h5>
                <ul className="links address">
                  {
                    footerContactDetails.map((item, index) => { 
                      return <li key={index}>
                        <span><img src={item.icon} alt="" /></span>
                        <span>{item.content}</span>
                      </li> 
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer