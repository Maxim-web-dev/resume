import { FC } from 'react'
import { LogOut } from 'lucide-react'
import style from './logOut.module.css'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/main'
import { useNavigate } from 'react-router-dom'

export const LogOutButton: FC = () => {
	const navigate = useNavigate()
	const onCLick = () => {
		localStorage.removeItem('id')
		navigate('/login')
	}
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<button onClick={onCLick} className={style.logOut}>
						<LogOut />
					</button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Выйти из аккаунта</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
