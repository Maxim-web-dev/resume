import { Link } from 'react-router-dom'

export default function Start() {
	return (
		<div className='flex flex-col justify-center items-center w-full'>
			<h1 className='text-white'>Welcome to the APP</h1>
			<Link to='/register' className='text-white'>REGISTER</Link>
			<Link to='/user' className='text-white'>USER</Link>
		</div>
	)
}
