import { FC, useEffect, useState } from 'react'

import { Education, Experience, useStore, ModeToggle, Button } from '@/main'

import { getUser } from '../api'
import style from './user.module.css'
import { BioCard } from '@/components/admin/Cards/bioCard'
import { Account } from '../../../../shared/buttons/account'

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
		// <div className={style.wrapper}>
		// 	<div className={style.modeToggle}>
		// 		<ModeToggle />
		// 	</div>
		// 	<div className={style.account}>
		// 		<Account />
		// 	</div>
		// 	<BioCard />
		// 	<Education />
		// 	<Experience />
		// </div>
		<div className={style.wrapper}>
			<div className={style.modeToggle}>
				<ModeToggle />
			</div>
			<div className={style.account}>
				<Account />
			</div>
			<BioCard />
			<div className='flex gap-6 w-full'>
				<div className='flex flex-col w-[50%]'>
					<Education />
				</div>
				<div className='w-[50%]'>
					<Experience />
				</div>
			</div>
		</div>
	)
}
