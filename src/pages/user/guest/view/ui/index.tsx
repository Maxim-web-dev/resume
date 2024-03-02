import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../api'
import { useStore } from '@/main'
import { ViewName } from '@/components/viewUser/name'
import { ViewJob } from '@/components/viewUser/job'
import { ViewMail } from '@/components/viewUser/mail'
import { ViewLocation } from '@/components/viewUser/location'
import { ViewEducation } from '@/components/viewUser/education'
import { ViewExperience } from '@/components/viewUser/experience'
import style from './viewUser.module.css'

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
			<div className='flex flex-col items-center gap-5 bg-[#1c1c1c] p-7 rounded-xl'>
				<ViewName />
				<ViewJob />
				<div className='flex gap-6'>
					<ViewLocation />
					<ViewMail />
				</div>
			</div>
			<ViewEducation />
			<ViewExperience />
		</div>
	)
}
