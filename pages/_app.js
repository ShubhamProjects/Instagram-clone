import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { modalContext, setModalContext } from '../modalContext/modalContext';
import { useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	const [openModal, setOpenModal] = useState(false);
	const modalState = () => {
		setOpenModal(!openModal);
	};
	return (
		<SessionProvider session={session}>
			<modalContext.Provider value={openModal}>
				<setModalContext.Provider value={modalState}>
					<Component {...pageProps} />
				</setModalContext.Provider>
			</modalContext.Provider>
		</SessionProvider>
	);
}

export default MyApp;
