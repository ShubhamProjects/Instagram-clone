import { useContext } from 'react';
import { setDeveloperModalContext } from '../modalContext/modalContext';

const DeveloperModal = () => {
	const developerModalState = useContext(setDeveloperModalContext);

	const openLinkedInProfile = () => {
		window.location =
			'https://www.linkedin.com/in/shubham-vishwakarma-7252221a9';
	};

	const openGithubProfile = () => {
		window.location = 'https://www.github.com/ShubhamProjects';
	};

	return (
		<div
			onClick={developerModalState}
			className='bg-slate-300 fixed flex z-10 top-0 bottom-0 left-0 right-0
		justify-center items-center bg-opacity-70'
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='fixed h-[90] w-96
			border-2 border-slate-300 -z-[10] drop-shadow-xl bg-white
			rounded-lg'
			>
				<div className='flex flex-col mt-6 items-center'>
					<h1 className='font-semibold'>Shubham Kr Vishwakarma</h1>
				</div>
				<div className='m-2 flex flex-col items-center'>
					<h1 className='font-thin'>Company: Tata Consultancy & Services</h1>
					<h1 className='font-thin'>Role: Frontend developer</h1>
				</div>

				<div className='flex flex-col items-center'>
					<h1 className='font-thin italic'>
						It will be a pleasure to connect with you
					</h1>
					<div className='mt-2 mb-2 pr-4 flex flex-col items-center'>
						<h1 className='font-thin'>Phone: 8753999734</h1>
						<h1 className='font-thin'>Email: skpunk3695@gmail.com</h1>
					</div>
				</div>

				<div className='flex justify-around m-2'>
					<button onClick={() => openLinkedInProfile()}>
						<img
							className='h-12 w-12 rounded'
							alt=''
							src='https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png'
						/>
					</button>
					<button onClick={() => openGithubProfile()}>
						<img
							className='h-10 w-16 rounded'
							alt=''
							src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeveloperModal;
