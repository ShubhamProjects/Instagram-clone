const DeletePostModal = ({ deleteModal, onDelete }) => {
	return (
		<div
			onClick={deleteModal}
			className='bg-slate-300 fixed flex z-10 top-0 bottom-0 left-0 right-0
		justify-center items-center bg-opacity-70'
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='fixed p-4 border-2 border-slate-300 -z-[10] drop-shadow-xl bg-white
			rounded-lg hover:bg-red-600 hover:text-white hover:cursor-pointer'
			>
				<button onClick={onDelete} className='font-semibold'>
					Delete Post !
				</button>
			</div>
		</div>
	);
};

export default DeletePostModal;
