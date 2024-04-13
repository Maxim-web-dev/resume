import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, UserRoundPlus } from 'lucide-react'
import { EnterIcon, ExitIcon } from '@radix-ui/react-icons'
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/shared/shadcn'

export const AccountButton: FC = () => {
	const navigate = useNavigate()

	const logOut = () => {
		localStorage.removeItem('id')
		navigate('/login')
	}

	const createAccount = () => navigate('/register')
	const loginAccount = () => navigate('/user/admin')
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<User size={19} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Аккаунт</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem onClick={createAccount}>
						Создать
						<DropdownMenuShortcut><UserRoundPlus size={15} /></DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={loginAccount}>
						Войти
						<DropdownMenuShortcut>
							<EnterIcon />
						</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={logOut}>
					Выйти
					<DropdownMenuShortcut>
						<ExitIcon />
					</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
