import axios from 'axios'
import { memo, useEffect, useState } from 'react'

import JobDialog from '@/components/dialogs/job'
import { Button } from '@/components/ui/button'
import { useStore } from '@/store/user'
import { TypeUser } from '../../types/user'
import { LocationDialog } from '@/components/dialogs/location'
import MailDialog from '@/components/dialogs/mail'
import { Education } from '@/components/dialogs/education'
import { Experience } from '@/components/dialogs/experience'

export const User = memo(() => {
	const [user, setUser] = useState<TypeUser>()
	const { job, location, mail, education } = useStore()

	useEffect(() => {
		async function getUser() {
			try {
				const name = localStorage.getItem('name')
				const password = localStorage.getItem('password')

				const response = await axios.get(
					`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?name=${name}&password=${password}`
				)
				setUser(response.data[0])
			} catch (error) {
				console.warn(error)
			}
		}
		getUser()
	}, [])

	const handleSend = ():void => {
		async function udpateUser() {
			try {
				await axios.put(
					`https://65a02bdf7310aa1f8144b77c.mockapi.io/users/${user?.id}`,
					{
						about: {
							job,
							location,
							mail
						},
						education
					}
				)
			} catch (error) {
				alert(error)
			}
		}
		udpateUser()
	}
	return (
		<div className='flex flex-col justify-center items-center gap-[20px]'>
			<Button variant='outline' onClick={handleSend}>
				Сохранить резюме
			</Button>
			<h1 className='text-[#E2E8F0]'>
				{user?.name ? user.name : 'Loading...'}
			</h1>
			<JobDialog />
			<LocationDialog />
			<MailDialog />
			<hr className='border-[#334155] w-full'/>
			<Education />
			<hr className='border-[#334155] w-full'/>
			<Experience />
		</div>
	)
})