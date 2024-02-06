import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './layout/layout'
import { User } from './pages/loggedIn/user'
import Register from './pages/register'
import Start from './pages/start'
import Error from './pages/error/error'

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />} errorElement={<Error />}>
        <Route index element={<Start />}/>
        <Route path='user' element={<User />} />
        <Route path='register' element={<Register />} />
			</Route>
		)
	)
	return <RouterProvider router={router} />
}