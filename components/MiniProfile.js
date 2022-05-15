import { signOutContext, user } from '../modalContext/modalContext';
import { useContext } from 'react';
const MiniProfile = () => {
	const data = useContext(user);
	const signOut = useContext(signOutContext);

	return (
		<div className='flex items-center justify-between mt-14 ml-10'>
			<img
				src={data?.photoURL}
				alt=''
				className='rounded-full border p-[2px] w-16 h-16'
			/>

			<div className='flex-1 mx-4'>
				<h2 className='font-bold'>{data?.displayName}</h2>
				<h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
			</div>

			<button onClick={signOut} className='text-blue-400 text0sm font-semibold'>
				Sign Out
			</button>
		</div>
	);
};

export default MiniProfile;
