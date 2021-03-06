import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import styles from 'styles/base.scss';

export default class extends Document {
	static async getInitialProps (...args) {
		const documentProps = await super.getInitialProps(...args);
		return { ...documentProps, helmet: Helmet.renderStatic() };
	}

	get helmetHtmlAttrComponents () {
		return this.props.helmet.htmlAttributes.toComponent();
	}

	get helmetBodyAttrComponents () {
		return this.props.helmet.bodyAttributes.toComponent();
	}

	get helmetHeadComponents () {
		return Object.keys(this.props.helmet)
			.filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
			.map(el => this.props.helmet[el].toComponent());
	}

	get helmetJsx () {
		let title = 'Shop Car';
		return (
			<Helmet>
				<title>{title}</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta property='og:title' content={title} />
			</Helmet>
		);
	}

	render () {
		return (
			<html {...this.helmetHtmlAttrComponents}>
				<Head>
					{ this.helmetJsx }
					{ this.helmetHeadComponents }
				</Head>
				<body {...this.helmetBodyAttrComponents}>
					<style>{styles}</style>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}