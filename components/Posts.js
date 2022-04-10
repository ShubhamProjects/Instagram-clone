import Post from './Post';

const posts = [
	{
		id: '123',
		username: 'Shubham Vishwakarma',
		userImg: 'https://links.papareact.com/jjm',
		img: 'https://links.papareact.com/jjm',
		caption: 'Hey people',
	},
	{
		id: '456',
		username: 'Shubham Vishwakarma',
		userImg: 'https://links.papareact.com/jjm',
		img: 'https://links.papareact.com/jjm',
		caption: 'Hey groups',
	},
];

const Posts = () => {
	return (
		<div>
			{posts.map((item) => (
				<Post
					key={item.id}
					id={item.id}
					username={item.username}
					userImg={item.userImg}
					img={item.img}
					caption={item.caption}
				/>
			))}
		</div>
	);
};

export default Posts;
