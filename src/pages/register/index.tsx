import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { TypeForm } from '@/app/types'
import { registUser } from '@/processes/auth/registUser'
import style from './register.module.css'

export const RegisterPage: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TypeForm>({
		mode: 'onBlur',
	})

	const navigate = useNavigate()
	const onSubmit = async (data: TypeForm) => {
		await registUser(data)
		navigate('/user/admin')
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
					<h1 className={style.h1}>Давайте начнем!</h1>
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
						Зарегистрироваться
					</button>
					<div className='flex gap-3'>
						<p className='text-[#87878c]'>Уже есть аккаунт?</p>
						<Link to='/login' className='text-[#d8ae5e]'>
							Войти
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
