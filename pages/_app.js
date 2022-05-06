import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import {
	modalContext,
	setModalContext,
	developerModalContext,
	setDeveloperModalContext,
} from '../modalContext/modalContext';
import { useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	const [openModal, setOpenModal] = useState(false);
	const [developerOpenModal, setDeveloperOpenModal] = useState(false);

	const modalState = () => {
		setOpenModal(!openModal);
	};

	const developerModalState = () => {
		setDeveloperOpenModal(!developerOpenModal);
	};

	return (
		<SessionProvider session={session}>
			<modalContext.Provider value={openModal}>
				<setModalContext.Provider value={modalState}>
					<developerModalContext.Provider value={developerOpenModal}>
						<setDeveloperModalContext.Provider value={developerModalState}>
							<Component {...pageProps} />
						</setDeveloperModalContext.Provider>
					</developerModalContext.Provider>
				</setModalContext.Provider>
			</modalContext.Provider>
		</SessionProvider>
	);
}

export default MyApp;
