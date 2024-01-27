import axios from 'axios'
import { memo, useEffect, useState } from 'react'

import ModalDialog from '@/components/dialog'
import { Button } from '@/components/ui/button'
import { useStore } from '@/store/user'
import { TypeUser } from '../../types/user'

export const User = memo(() => {
	const [user, setUser] = useState<TypeUser>()
	const { job } = useStore()

	useEffect(() => {
		async function getUser() {
			try {
				const name = localStorage.getItem('name')
				const password = localStorage.getItem('password')

				const response = await axios.get(
					`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?name=${name}&password=${password}`
				)
				setUser(response.data[0])
				console.log(response.data[0].id);
				
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
						}
					}
				)
			} catch (error) {
				alert(error)
			}
		}
		udpateUser()
	}
	return (
		<div>
			<Button variant='outline' onClick={handleSend}>
				Сохранить резюме
			</Button>
			<h1 className='text-[#E2E8F0]'>
				{user?.name ? user.name : 'Loading...'}
			</h1>
			<ModalDialog />
		</div>
	)
})