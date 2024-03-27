import { FC } from 'react'
import { Link } from 'react-router-dom'
import style from './start.module.css'
import { ArrowRight } from 'lucide-react'

export const Start: FC = () => {
	return (
		<div className={style.wrapper}>
			<header className='flex justify-end w-full gap-5 items-center self-start'>
				<Link
					to='resume/user/admin'
					className='transform hover:scale-110 transition-transform duration-300'
				>
					<button className='flex items-center gap-1'>
						Войти
						<ArrowRight size={17} />
					</button>
				</Link>
				<Link to='/resume/register' className={style.button}>
					Регистрация
				</Link>
			</header>
			<main>
				<div className=''>
					<h1 className={style.title}>
						Создай свое <span className='text-[#3a82f7]'>резюме</span> за считанные минуты.
					</h1>
					{/* <img src="https://myfundedfutures.com/images/candlesticks-650.png" alt="" /> */}
					{/* <Link to='/about'>О проекте</Link> */}
				</div>
			</main>
		</div>
	)
}
