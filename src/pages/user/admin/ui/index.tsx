import { FC, useEffect, useState } from 'react'
import axios from 'axios'

import {
	Education,
	Experience,
	JobDialog,
	useStore,
	TypeUser,
	NameDialog,
	MailDialog,
	LocationDialog,
} from '@/main'
import style from './user.module.css'
import { SaveResumeButton } from './buttons/saveResume'
import { LogOutButton } from './buttons/logOut'
import { Separator } from '@/shared/shadcn/separator'

export const User: FC = () => {
	const [isLoading, setLoading] = useState(false)
	const { set } = useStore()

	useEffect(() => {
		const getUser = async () => {
			try {
				const id: string | null = localStorage.getItem('id')
				if (!id) {
					throw new Error('Id not found in localStorage')
				}
				const response = await axios.get<TypeUser[]>(
					`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?id=${id}`
				)
				set(response.data[0])
				setLoading(true)
			} catch (error) {
				console.error(error)
			}
		}
		getUser()
	}, [])
	return (
		<div className={style.wrapper}>
			<header className='flex flex-col items-center justify-center gap-[2vh] '>
				<div className='flex items-center gap-2'>
					<NameDialog />
					<LogOutButton />
				</div>
				<SaveResumeButton />
				<JobDialog />
				<div className='flex gap-10 mb-4'>
					<LocationDialog />
					<MailDialog />
				</div>
			</header>
			<main className='flex flex-col gap-4'>
				<Education />
				<Experience />
			</main>
			<footer></footer>
		</div>
	)
}
