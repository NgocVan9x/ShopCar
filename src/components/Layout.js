import { PureComponent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Layout extends PureComponent {
	componentDidMount() {
		window.$ = window.jQuery = require('jquery');
		require('bootstrap');
	}
	render() {
		return (
			<div>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}
