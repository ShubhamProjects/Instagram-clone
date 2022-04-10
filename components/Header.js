import Image from 'next/image';
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

const Header = () => {
	return (
		<div className='shadow-sm border-b bg-white sticky top-0 z-50'>
			<div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
				<div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
					<Image
						src='https://links.papareact.com/ocw'
						layout='fill'
						objectFit='contain'
						alt=''
					/>
				</div>

				<div className='relative flex-shrink-0 lg:hidden w-10 cursor-pointer'>
					<Image
						src='https://links.papareact.com/jjm'
						layout='fill'
						objectFit='contain'
						alt=''
					/>
				</div>

				<div className='max-w-xs'>
					<div className='relative mt-1 p-3 rounded-md'>
						<div
							className='absolute inset-y-0 pl-3 flex items-center
					pointer-events-none'
						>
							<SearchIcon className='h-5 w-5 text-gray-500' />
						</div>
						<input
							className='bg-gray-50 block w-full rounded-md
						pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black'
							placeholder='Search'
							type='text'
						/>
					</div>
				</div>

				<div className='flex items-center justify-end space-x-4'>
					<HomeIcon className='navigationButton' />
					<MenuIcon className='h-6 md:hidden cursor-pointer' />
					<div className='relative navigationButton'>
						<PaperAirplaneIcon className='rotate-45' />
						<div
							className='absolute -top-2 -right-2 text-xs w-5 h-5
						bg-red-500 rounded-full items-center flex justify-center
						animate-pulse text-white'
						>
							3
						</div>
					</div>
					<PlusCircleIcon className='navigationButton' />
					<UserGroupIcon className='navigationButton' />
					<HeartIcon className='navigationButton' />

					<img
						src='https://links.papareact.com/ocw'
						alt='profile pic'
						className='h-10 w-10 rounded-full cursor-pointer'
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
