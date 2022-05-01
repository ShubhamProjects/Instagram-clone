import { useContext } from 'react';
import { setModalContext } from '../modalContext/modalContext';

const Modal = () => {
	const modalState = useContext(setModalContext);

	return (
		<div
			onClick={modalState}
			className='bg-slate-100 fixed flex z-10 top-0 bottom-0 left-0 right-0
		justify-center items-center bg-opacity-50'
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className=' fixed top-[40%] left-[45%] flex-col p-14
			border-2 border-red-500 -z-[10] flex drop-shadow-lg bg-white
			rounded-md justify-center items-center'
			>
				<h1>I am modal</h1>
				<button>Click me</button>
			</div>
		</div>
	);
};

export default Modal;
