import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { TypeForm } from '@/app/types'
import style from './login.module.css'

export const LoginPage: FC = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TypeForm>({
		mode: 'onBlur',
	})

	const onSubmit = async (data: TypeForm) => {
		try {
			const response = await axios.get(
				`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?name=${data.name}&password=${data.password}`
			)
			localStorage.setItem('id', response.data[0].id)
			navigate('/user/admin')
		} catch (error) {
			console.error(error)
			toast.error('Похоже пользователя не существует', { duration: 3000 })
		}
	}
	return (
		<div className={style.wrapper}>
			<div className='w-full flex justify-between'>
				<div className='w-[50%] flex items-center justify-center'>
					<img
						src='https://myfundedfutures.com/images/login/left-side-image.png'
						className={style.img}
					/>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
					<h1 className={style.h1}>С возвращением!</h1>
					<label className={style.label}>
						<input
							className={style.input}
							placeholder='Имя'
							{...register('name', {
								required: true,
							})}
						/>
						{errors?.name && (
							<p className={style.error}>
								{errors?.name?.message || 'Это поле обязательно к заполнению!'}
							</p>
						)}
					</label>
					<label className={style.label}>
						<input
							type='password'
							placeholder='Пароль'
							className={style.input}
							{...register('password', {
								required: true,
								minLength: {
									value: 6,
									message: 'Пароль должен содержать в себе минимум 6 символов!',
								},
							})}
						/>
						{errors?.password && (
							<p className={style.error}>
								{errors?.password?.message ||
									'Это поле обязательно к заполнению!'}
							</p>
						)}
					</label>
					<button type='submit' className={style.button}>
						Войти
					</button>
					<div className='flex gap-3'>
						<p className='text-[#87878c]'>Еще нет аккаунта?</p>
						<Link to='/register' className='text-[#d8ae5e]'>
							Зарегистрироваться
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
