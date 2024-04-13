import { GanttChartSquare } from 'lucide-react'
import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import style from './layout.module.css'
import { useMatchMedia } from '@/features/hooks/matchMedia'
import { useTheme } from '@/shared/buttons/theme/theme-provider'

export const Layout: FC = () => {
	const isDesktop = useMatchMedia()
	const { setTheme } = useTheme()
	!isDesktop && setTheme('light')

	return (
		<>
			<div className={style.logo}>
				<GanttChartSquare color='white' />
				<Link to='/' className={style.logoText}>
					<h1>Resume</h1>
				</Link>
			</div>
			{isDesktop ? (
				<Outlet />
			) : (
				<div className='w-[100vw] h-[100vh] flex justify-center items-center'>
					<h1 className='text-center'>Извините, приложение работает только на больших экранах</h1>
				</div>
			)}

			<Toaster position='top-center' richColors />
		</>
	)
}
