const Story = ({ img, userName }) => {
	return (
		<div>
			<img
				className='h-14 w-14 rounded-full
            p-[1.5px] border-red-500 border-2 
            object-contain cursor-pointer hover:scale-110 transition-transform
            durtion-200 ease-out'
				src={img}
				alt=''
			/>
			<p className='text-xs truncate w-14 text-center'>{userName}</p>
		</div>
	);
};

export default Story;
