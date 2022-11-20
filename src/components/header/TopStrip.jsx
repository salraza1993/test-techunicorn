import { Link } from 'react-router-dom'

import phoneIcon from './../../assets/images/phone.svg'
import mainLogo from './../../assets/images/logo.svg'
import fb from './../../assets/images/fb.svg'
import tw from './../../assets/images/tw.svg'
import lg from './../../assets/images/lg.svg'
import yt from './../../assets/images/yt.svg'

const TopStrip = () => {
	return <div className="header__top__strip pt-3 pb-4">
		<div className="container">
			<div className="header__top__strip__container [ d-flex justify-content-between align-items-center]">
				<div className="phone__number [ d-flex gap-3 align-items-center ]">
					<img src={phoneIcon} alt="" />
					+022 319 821 967
				</div>
				<div className="site__logo">
					<Link to="/">
						<img src={mainLogo} alt="Site Logo" />
					</Link>
				</div>
				<ul className="social__list">
					<li>
						<Link to="fb.com" target="_blank">
							<img src={fb} alt="Facebook Icon" />
						</Link>
					</li>
					<li>
						<Link to="twitter.com" target="_blank">
							<img src={tw} alt="Twitter Icon" />
						</Link>
					</li>
					<li>
						<Link to="instagram.com" target="_blank">
							<img src={lg} alt="Instagram Icon" />
						</Link>
					</li>
					<li>
						<Link to="youtube.com" target="_blank">
							<img src={yt} alt="Youtube Icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</div>  
}

export default TopStrip