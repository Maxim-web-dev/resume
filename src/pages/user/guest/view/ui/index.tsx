import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../api'
import { useStore, ViewExperience, ViewEducation, BioCard, ModeToggle } from '@/main'
import style from './viewUser.module.css'
import { Account } from '@/shared/buttons/account'

export const View: FC = () => {
	const { id } = useParams()
	const { setViewUser } = useStore()

	useEffect(() => {
		const getUserById = async (id: string) => {
			try {
				const response = await getUser(id)
				response && setViewUser(response)
				console.log(response)
			} catch (error) {
				console.error(error)
			}
		}
		id && getUserById(id)
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
				<div className='flex flex-col w-[50%]'>
					<ViewEducation />
				</div>
				<div className='w-[50%]'>
					<ViewExperience />
				</div>
			</div>
		</div>
	)
}
