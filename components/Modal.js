import { useContext, useRef, useState } from 'react';
import { setModalContext, user } from '../modalContext/modalContext';
import { CameraIcon } from '@heroicons/react/outline';
import { db, storage } from '../firebase';
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';

const Modal = () => {
	const data = useContext(user);

	const modalState = useContext(setModalContext);
	const filePicker = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [caption, setCaption] = useState('');
	const [loading, setLoading] = useState(false);

	const addImageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result);
		};
	};

	const captureCaption = (e) => {
		setCaption(e.target.value);
	};

	const uploadPost = async () => {
		if (loading) return;

		setLoading(true);

		const docRef = await addDoc(collection(db, 'posts'), {
			userName: data.user.displayName,
			caption: caption,
			profileImg: data.user.photoURL,
			timeStamp: serverTimestamp(),
		});

		const imageRef = ref(storage, `posts/${docRef.id}/image`);

		await uploadString(imageRef, selectedFile, 'data_url').then(
			async (snapshot) => {
				const downloadUrl = await getDownloadURL(imageRef);
				await updateDoc(doc(db, 'posts', docRef.id), {
					image: downloadUrl,
				});
			}
		);

		modalState();
		setLoading(false);
		setCaption('');
		setSelectedFile(null);
	};

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
				className='fixed p-2 w-72 md:w-96
			border-2 border-slate-300 -z-[10] drop-shadow-xl bg-white
			rounded-lg'
			>
				<div className='border-b-2 h-44 p-2 flex items-center justify-center'>
					{selectedFile ? (
						<>
							<img
								src={selectedFile}
								layout='fill'
								alt=''
								className='border-b-2 h-44'
							/>
							{loading && (
								<h1 className='absolute animate-pulse font-bold text-white'>
									Uploading...
								</h1>
							)}
						</>
					) : (
						<CameraIcon className='h-20 w-20 text-red-600' />
					)}
				</div>
				<div>
					<input
						ref={filePicker}
						type='file'
						hidden
						onChange={addImageToPost}
					/>
				</div>
				<input
					className='ml-1 mt-2 w-[91%] focus:ring-0 border-none'
					type='text'
					value={caption}
					onChange={captureCaption}
					placeholder='Enter your caption...'
				/>

				<div className='flex justify-around mt-1'>
					<button
						onClick={() => filePicker.current.click()}
						className='rounded-lg hover:bg-blue-400 pt-1 pb-1 md:p-2 
					border-2 w-36 m-1 md:w-40 bg-blue-100 justify-around flex items-center font-semibold '
					>
						<CameraIcon className='h-6 w-6 text-red-600' />
						Select Photo
					</button>

					<button
						disabled={!selectedFile}
						onClick={uploadPost}
						className='rounded-lg hover:bg-blue-400 pt-1 pb-1 md:p-2
					border-2 w-36 m-1 md:w-40 bg-blue-100 font-semibold disabled:cursor-not-allowed disabled:bg-gray-100'
					>
						Post
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
