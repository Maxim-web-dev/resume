import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TypeForm } from '../types/form'

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TypeForm>({
		mode: 'onBlur',
	})
	const navigate = useNavigate()
	// const { setName } = UserStore()
	const onSubmit = (data: TypeForm) => {
		async function postUser(props: TypeForm) {
			try {
				await axios.post(
					'https://65a02bdf7310aa1f8144b77c.mockapi.io/users',
					props
				)
				// setName(data.name)
				localStorage.setItem('name', data.name)
				localStorage.setItem('password', data.password)
				navigate('/user')
			} catch (error) {
				console.warn(error)
			}
		}
		postUser(data)
	}
	return (
		<div className='w-full text-white flex flex-col items-center justify-center'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Register</h1>
				<label>
					<p>Name</p>
					<input
						type='name'
						className='text-black'
						{...register('name', {
							required: true,
						})}
					/>
					{errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
				</label>
				<label>
					<p>Password</p>
					<input
						type='password'
						className='text-black'
						{...register('password', {
							required: true,
							minLength: {
								value: 6,
								message: 'Минимум 6 символов!',
							},
						})}
					/>
					{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
				</label>
				<Button variant='outline' type='submit' className='text-black'>
					Submit
				</Button>
			</form>
		</div>
	)
}
