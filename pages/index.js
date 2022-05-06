import Head from 'next/head';
import { useContext } from 'react';
import DeveloperModal from '../components/DeveloperModal';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';
import {
	modalContext,
	developerModalContext,
} from '../modalContext/modalContext';

export default function Home() {
	const openModal = useContext(modalContext);
	const openDeveloperModal = useContext(developerModalContext);

	return (
		<div className='bg-gray-50 h-full'>
			<Head>
				<title>Instagram-clone</title>
				<meta name='Instagram' content='Instagram clone using next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<Feed />
			<div>{openModal && <Modal />}</div>

			<div>{openDeveloperModal && <DeveloperModal />}</div>
		</div>
	);
}
