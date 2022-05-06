import faker from '@faker-js/faker';
import { useState, useEffect, useContext } from 'react';
import { setDeveloperModalContext } from '../modalContext/modalContext';

const Suggestions = () => {
	const [suggestion, setSugestion] = useState([]);
	const [developerClick, setDeveloperClick] = useState(true);
	const developerModalState = useContext(setDeveloperModalContext);

	useEffect(() => {
		const suggest = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		setSugestion(suggest);
	}, []);

	const developerModalclick = () => {
		setDeveloperClick(false);
		developerModalState();
	};

	return (
		<div className='mt-4 ml-10'>
			<div className='flex justify-between text-sm mb-5'>
				<h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
				<button className='text-gray-600 font-semibold'>See All</button>
			</div>

			{suggestion.map((profile) => (
				<div
					key={profile.id}
					className='flex
                    items-center justify-between mt-3'
				>
					<img
						src={profile.avatar}
						alt=''
						className='rounded-full w-10 h-10 borded p-[2px]'
					/>

					<div className='flex-1 ml-4'>
						<h2 className='font-semibold text-sm'>{profile.username}</h2>
						<h3 className='text-sm text-gray-400'>
							Works at - {profile.company.name}
						</h3>
					</div>

					<button className='text-xs text-bold text-blue-500'>Follow</button>
				</div>
			))}

			<div
				onClick={developerModalclick}
				className='mt-20 hover:cursor-pointer flex justify-center'
			>
				<span className='flex h-3 w-3'>
					{developerClick && (
						<span className='animate-ping absolute inline-flex h-6 w-6 rounded-full bg-sky-400 opacity-75'></span>
					)}
					<span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
				</span>
				<p className='text-sm text-black font-thin italic'>
					Powered by -
					<span className='text-md font-medium'> Shubham Vishwakarma</span>
				</p>
			</div>
		</div>
	);
};

export default Suggestions;
