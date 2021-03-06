import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/default.css';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<Nav></Nav>
			<Component {...pageProps} />
			<Footer class="footer"></Footer>
		</>
	);
}

export default MyApp;
