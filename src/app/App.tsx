import { FC } from 'react'
import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import {
	AboutPage,
	AdminUserPage,
	ErrorPage,
	GuestUserPage,
	Layout,
	LoginPage,
	RegisterPage,
	StartPage,
} from '@/pages'
import { RequireAuth } from '@/processes/auth/requireAuth'
import { ThemeProvider } from '@/shared/buttons/theme/theme-provider'

const App: FC = () => {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
				<Route index element={<StartPage />} />
				<Route path='user'>
					<Route
						path='admin'
						element={
							<RequireAuth>
								<AdminUserPage />
							</RequireAuth>
						}
					/>
					<Route path='view/:id' element={<GuestUserPage />} />
				</Route>
				<Route path='register' element={<RegisterPage />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='about' element={<AboutPage />} />
			</Route>
		)
	)

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}
export default App
