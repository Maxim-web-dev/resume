import { Button } from '@/shared/shadcn'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import style from './error.module.css'

export const ErrorPage: FC = () => {
	return (
		<div className={style.wrapper}>
			<h1>Ошибка!</h1>
			<h2>Страница не существует</h2>
			<Button>
				<Link to='/'>Вернуться на главную</Link>
			</Button>
		</div>
	)
}
