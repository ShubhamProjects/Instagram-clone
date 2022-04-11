import { faker } from '@faker-js/faker';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Story from './Story';

const Stories = () => {
	const [suggestion, setSuggestion] = useState([]);
	const { data: session } = useSession();

	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		setSuggestion(suggestions);
	}, []);

	return (
		<div
			className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm
        overflow-x-scroll scrollbar-thin scrollbar-thumb-black'
		>
			{session && (
				<Story img={session.user.image} userName={session.user.username} />
			)}
			{suggestion.map((profile) => (
				<Story
					key={profile.id}
					img={profile.avatar}
					userName={profile.username}
				/>
			))}
		</div>
	);
};

export default Stories;
