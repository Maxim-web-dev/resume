import { TypeForm } from '../types/form'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Login() {
	const [user, setUser] = useState<TypeForm>()

	useEffect(() => {
		async function getUser() {
			try {
				const name = localStorage.getItem('name')
				const password = localStorage.getItem('password')

				const response = await axios.get(
					`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?name=${name}&password=${password}`
				)
				setUser(response.data)

				console.log(user, name, password)
			} catch (error) {
				console.warn(error)
			}
		}
		getUser()
	}, [])

	return <div></div>
}
