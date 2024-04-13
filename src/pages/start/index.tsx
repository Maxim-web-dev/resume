import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import style from './start.module.css'

export const StartPage: FC = () => {
	return (
		<div className={style.wrapper}>
			<header className='flex justify-end w-full gap-5 items-center self-start'>
				<Link
					to='/user/admin'
					className='transform hover:scale-110 transition-transform duration-300'
				>
					<button className='flex items-center gap-1'>
						Войти
						<ArrowRight size={17} />
					</button>
				</Link>
				<Link to='/register' className={style.button}>
					<button>Регистрация</button>
				</Link>
			</header>
			<main>
				<div>
					<h1 className={style.title}>
						Создай свое <span className='text-[#3a82f7]'>резюме</span> за
						считанные минуты.
					</h1>
					<Link to='/about'>О проекте</Link>
				</div>
			</main>
		</div>
	)
}
