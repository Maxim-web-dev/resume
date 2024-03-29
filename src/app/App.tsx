import { FC } from 'react'
import {
	Route,
	RouterProvider,
	// createBrowserRouter,
	createHashRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import {
	About,
	Error,
	Layout,
	Login,
	Register,
	RequireAuth,
	Start,
	User,
	View,
} from '@/main'
import { ThemeProvider } from '@/shared/theme/theme-provider'
const App: FC = () => {
	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route path='/' element={<Layout />} errorElement={<Error />}>
	// 			<Route index element={<Start />} />
	// 			<Route path='user'>
	// 				<Route
	// 					path='admin'
	// 					element={
	// 						<RequireAuth>
	// 							<User />
	// 						</RequireAuth>
	// 					}
	// 				/>
	// 				<Route path='view/:id' element={<View />} />
	// 			</Route>
	// 			<Route path='register' element={<Register />} />
	// 			<Route path='login' element={<Login />} />
	// 			<Route path='about' element={<About />} />
	// 		</Route>, 
	// 	), {basename: '/resume'}
	// )
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />} errorElement={<Error />}>
				<Route index element={<Start />} />
				<Route path='user'>
					<Route
						path='admin'
						element={
							<RequireAuth>
								<User />
							</RequireAuth>
						}
					/>
					<Route path='view/:id' element={<View />} />
				</Route>
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
				<Route path='about' element={<About />} />
			</Route>
		), {basename: '/resume'}
	)
	
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}
export default App
