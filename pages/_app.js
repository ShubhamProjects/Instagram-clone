import '../styles/globals.css';
import {
	modalContext,
	setModalContext,
	developerModalContext,
	setDeveloperModalContext,
	user,
	signInContext,
	signOutContext,
} from '../modalContext/modalContext';
import { useState, useEffect } from 'react';
import {
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { authentication } from '../firebase';

function MyApp({ Component, pageProps: { ...pageProps } }) {
	const [openModal, setOpenModal] = useState(false);
	const [developerOpenModal, setDeveloperOpenModal] = useState(false);
	const [userData, setUserData] = useState(null);

	const modalState = () => {
		setOpenModal(!openModal);
	};

	const developerModalState = () => {
		setDeveloperOpenModal(!developerOpenModal);
	};

	const signInButton = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(authentication, provider)
			.then((result) => {
				setUserData(result?.user);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const signOutButton = () => {
		signOut(authentication)
			.then(() => {
				console.log('logout');
				setUserData(null);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(
		() =>
			onAuthStateChanged(authentication, (userAuth) => {
				if (userAuth) {
					setUserData(userAuth);
				} else {
					console.log('User not logged in');
				}
			}),
		[]
	);

	return (
		<user.Provider value={userData}>
			<signInContext.Provider value={signInButton}>
				<signOutContext.Provider value={signOutButton}>
					<modalContext.Provider value={openModal}>
						<setModalContext.Provider value={modalState}>
							<developerModalContext.Provider value={developerOpenModal}>
								<setDeveloperModalContext.Provider value={developerModalState}>
									<Component {...pageProps} />
								</setDeveloperModalContext.Provider>
							</developerModalContext.Provider>
						</setModalContext.Provider>
					</modalContext.Provider>
				</signOutContext.Provider>
			</signInContext.Provider>
		</user.Provider>
	);
}

export default MyApp;
