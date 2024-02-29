import { FC } from 'react'
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import { 
	Error,
	Layout,
	Login, 
	Register, 
	Start, 
	User,
	RequireAuth,
	About 
} from '@/main'

const App: FC = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />} errorElement={<Error />}>
				<Route index element={<Start />} />
				<Route path='user' element={
					<RequireAuth>
						<User />
					</RequireAuth>
				} />
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
				<Route path='about' element={<About />} />
			</Route>
		)
	)
	return <RouterProvider router={router} />
}
export default App