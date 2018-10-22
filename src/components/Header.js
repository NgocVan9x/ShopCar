import {Component} from 'react';

class Header extends Component {
	render(){
		return(
			<div className="header contain">
				<div className="item">
					<img src="/static/icon/phone-call.svg" className="header-icon"></img>
					<div className="header-title">(+84)834420091</div>
				</div>
				<div className="item">
					<img src="/static/icon/email.svg" className="header-icon"></img>
					<div className="header-title">pnv170691@gmail.com</div>
				</div>
				<div className="item">
					<img src="/static/icon/pin.svg" className="header-icon"></img>
					<div className="header-title">Ha Noi</div>
				</div>
				<div className="item">
					<img src="/static/icon/blogging.svg" className="header-icon"></img>
					<div className="header-title">Blog</div>
				</div>
				<div className="item">
					<img src="/static/icon/shield.svg" className="header-icon"></img>
					<div className="header-title">shield</div>
				</div>
				<div className="item">
					<img src="/static/icon/credit-card.svg" className="header-icon"></img>
					<div className="header-title">Payment</div>
				</div>
				<div className="item">
					<img src="/static/icon/user.svg" className="header-icon"></img>
					<div className="header-title">Register or Sign In</div>
				</div>
			</div>
		);
	}
}
export default Header;