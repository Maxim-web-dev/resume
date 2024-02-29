import { GanttChartSquare } from 'lucide-react'
import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from './layout.module.css'

export const Layout: FC = () => {
	return (
		<>
			<div className={style.logo}>
				<GanttChartSquare color='white' />
				<Link to='/' className={style.logoText}>
					<h1>Resume</h1>
				</Link>
			</div>
			<Outlet />
		</>
	)
}
