import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Moment from 'react-moment';

const Post = ({ id, username, userImg, img, caption }) => {
	const { data: session } = useSession();
	const [comment, setComment] = useState([]);
	const [commentText, setCommentText] = useState('');
	const [likes, setLikes] = useState([]);
	const [hasliked, setHasliked] = useState([]);

	const sendComment = async (e) => {
		e.preventDefault();

		const commentToSend = commentText;
		setCommentText('');

		await addDoc(collection(db, 'posts', id, 'comments'), {
			comment: commentToSend,
			username: session.user.username,
			userImage: session.user.image,
			timeStamp: serverTimestamp(),
		});
	};

	const likePosts = async () => {
		if (hasliked) {
			await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
		} else {
			await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
				username: session.user.username,
			});
		}
	};

	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(
				collection(db, 'posts', id, 'comments'),
				orderBy('timeStamp', 'desc')
			),
			(snapshot) => setComment(snapshot.docs)
		);
		return () => {
			unsubscribe();
		};
	}, [db, id]);

	useEffect(
		() =>
			onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
				setLikes(snapshot.docs)
			),
		[db, id]
	);

	useEffect(
		() =>
			setHasliked(
				likes.findIndex((like) => like.id === session?.user?.uid) !== -1
			),
		[likes]
	);

	return (
		<div className='bg-white my-7 border rounded-sm'>
			<div className='flex items-center p-5'>
				<img
					src={userImg}
					alt=''
					className='rounded-full h-12 w-12 object-contain
                border p-1 mr-3'
				/>
				<p className='flex-1 font-bold'>{username}</p>
				<DotsHorizontalIcon className='h-5' />
			</div>
			<img src={img} alt='' className='object-cover w-full' />

			{session && (
				<div className='flex justify-between px-4 pt-4'>
					<div className='flex space-x-4'>
						{hasliked ? (
							<HeartIconFilled
								onClick={likePosts}
								className='btn text-red-500'
							/>
						) : (
							<HeartIcon onClick={likePosts} className='btn' />
						)}

						<ChatIcon className='btn' />
						<PaperAirplaneIcon className='btn rotate-45' />
					</div>
					<BookmarkIcon className='btn' />
				</div>
			)}

			<p className='p-5 truncate'>
				{likes.length > 0 && (
					<p className='font-bold m-1'>{`${likes.length} ${
						likes.length > 1 ? 'likes' : 'like'
					}`}</p>
				)}
				<span className='font-bold mr-1'>{username}</span> {caption}
			</p>

			{comment.length > 0 && (
				<div
					className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black 
				scrollbar-thin'
				>
					{comment?.map((item) => (
						<div className='flex items-center space-x-2 mb-3' key={item.id}>
							<img
								className='h-7 rounded-full'
								alt=''
								src={item.data().userImage}
							/>
							<p className='text-sm flex-1'>
								<span className='font-bold mr-2'>{item.data().username}</span>
								{item.data().comment}
							</p>

							<Moment fromNow className='pr-5 text-xs'>
								{item.data().timeStamp?.toDate()}
							</Moment>
						</div>
					))}
				</div>
			)}

			{session && (
				<form className='flex items-center p-4'>
					<EmojiHappyIcon className='h-7' />
					<input
						className='border-none flex-1 focus:ring-0 outline-none'
						type='text'
						value={commentText}
						onChange={(e) => setCommentText(e.target.value)}
						placeholder='Add a comment...'
					/>
					<button
						type='submit'
						disabled={!commentText.trim()}
						onClick={sendComment}
						className='font-semibold text-blue-400'
					>
						Post
					</button>
				</form>
			)}
		</div>
	);
};

export default Post;
