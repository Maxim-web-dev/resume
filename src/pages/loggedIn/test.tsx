import { TypeForm } from '@/types/types'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function User() {
	
	const [user, setUser] = useState<TypeForm>()

	useEffect(() => {
		async function getUser() {
			try {
				const name = localStorage.getItem('name')
				const password = localStorage.getItem('password')

				const response = await axios.get(`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?name=${name}&password=${password}`)
				setUser(response.data)
			} catch (error) {
				console.warn(error)
			}
		}
		getUser()
	}, [])

	return <h1 className='text-[#E2E8F0]'>{user?.name}</h1>
}