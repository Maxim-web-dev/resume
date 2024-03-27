import { GanttChartSquare } from 'lucide-react'
import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from './layout.module.css'
import { Toaster } from 'sonner'

export const Layout: FC = () => {
	return (
		<>
			<div className={style.logo}>
				<GanttChartSquare color='white' />
				<Link to='/resume' className={style.logoText}>
					<h1>Resume</h1>
				</Link>
			</div>
			<Outlet />
			<Toaster position='top-center' richColors />
		</>
	)
}
