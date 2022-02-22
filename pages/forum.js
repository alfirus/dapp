import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div class="container-fluid">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-6">Left</div>
						<div class="col-sm-12 col-md-6 col-lg-6">Right</div>
					</div>
				</div>
			</main>
		</div>
	);
}
