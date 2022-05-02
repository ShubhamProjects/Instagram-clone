import { useContext } from 'react';
import { setModalContext } from '../modalContext/modalContext';

const Modal = () => {
	const modalState = useContext(setModalContext);

	return (
		<div
			onClick={modalState}
			className='bg-slate-300 fixed flex z-10 top-0 bottom-0 left-0 right-0
		justify-center items-center bg-opacity-70'
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='fixed h-72 w-96
			border-2 border-slate-300 -z-[10] drop-shadow-xl bg-white
			rounded-lg'
			>
				<img
					src='https://links.papareact.com/ocw'
					layout='fill'
					objectFit='contain'
					alt=''
					className='border-b-2 h-44'
				/>

				<input
					className='ml-4 mt-2 w-[91%]'
					placeholder='Enter your caption...'
				/>

				<div className='flex justify-around mt-4'>
					<button
						className='rounded-lg hover:bg-blue-400 p-2 
					border-2 w-40 bg-blue-100 font-semibold '
					>
						Select Photo
					</button>
					<button
						className='rounded-lg hover:bg-blue-400 p-2 
					border-2 w-40 bg-blue-100 font-semibold'
					>
						Post
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
