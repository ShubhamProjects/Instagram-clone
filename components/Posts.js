import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Post from './Post';

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(collection(db, 'posts'), orderBy('timeStamp', 'desc')),
			(snapshot) => {
				setPosts(snapshot.docs);
			}
		);

		return () => {
			unsubscribe();
		};
	}, [db]);

	return (
		<div>
			{posts.map((item) => (
				<Post
					key={item.id}
					id={item.id}
					username={item.data().userName}
					userImg={item.data().profileImg}
					img={item.data().image}
					caption={item.data().caption}
				/>
			))}
		</div>
	);
};

export default Posts;
