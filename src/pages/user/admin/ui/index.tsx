import { FC, useEffect, useState } from 'react'

import { Education, Experience, useStore, ModeToggle, Button } from '@/main'

import { getUser } from '../api'
import style from './user.module.css'
import { BioCard } from '@/components/admin/Cards/bio'
import { Account } from '../../../../shared/buttons/account'
import { Projects } from '@/components/admin/Cards/projects'
import { SaveResumeButton } from './buttons/saveResume'

export const User: FC = () => {
	const [isLoading, setLoading] = useState(false)
	const { setAdminUser } = useStore()

	useEffect(() => {
		const getUserAndSetData = async () => {
			try {
				const response = await getUser()
				response && setAdminUser(response)
				setLoading(true)
			} catch (error) {
				console.error(error)
			}
		}
		getUserAndSetData()
	}, [])
	return (
		<div className={style.wrapper}>
			<div className={style.modeToggle}>
				<ModeToggle />
			</div>
			<div className={style.account}>
				<Account />
			</div>
			<BioCard />
			<div className='flex gap-6 w-full'>
				<div className='flex flex-col gap-6 w-[50%]'>
					<Education />
					<Projects />
				</div>
				<div className='w-[50%]'>
					<Experience />
				</div>
			</div>
			<SaveResumeButton />
		</div>
	)
}
