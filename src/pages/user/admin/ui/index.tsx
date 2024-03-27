import { FC, useEffect, useState } from 'react'

import { Education, Experience, ModeToggle, useStore } from '@/main'

import { BioCard } from '@/components/admin/Cards/bio'
import { Projects } from '@/components/admin/Cards/projects'
import { Skills } from '@/components/admin/Cards/skills'
import { Account } from '../../../../shared/buttons/account'
import { getUser } from '../api'
import { SaveResumeButton } from './saveButton/ui'
import style from './user.module.css'

export const User: FC = () => {
	const [isLoading, setLoading] = useState(false)
	const { setAdminUser } = useStore()

	useEffect(() => {
		const getUserAndSetData = async () => {
			try {
				const response = await getUser()
				response && setAdminUser(response)
				console.log(response)
				setLoading(true)
			} catch (error) {
				console.error(error)
			}
		}
		getUserAndSetData()
	}, [])
	console.log(isLoading);
	
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
					<Skills />
				</div>
				<div className='w-[50%]'>
					<Experience />
				</div>
			</div>
			<SaveResumeButton />
		</div>
	)
}
