import axios from 'axios'
import { TypeForm } from '@/main'

export const registUser = async (data: TypeForm) => {
	const user = {
		name: data.name,
		password: data.password,
		about: {
			job: [],
			location: "",
			mail: ""
		},
		education: [
			{ 
				text: "",
				date: { 
					from: '',
					to: '' 
				} 
			}
		],
		experience: [
			{
				place: "",
				tools: [],
				description: [],
				date: { from: '', to: '' }
			}
		],
		projects: [
			{
				name: "",
				description: "",
				link: "",
			}
		],
		skills: []
	}
	try {
		const res = await axios.post(
			'https://65a02bdf7310aa1f8144b77c.mockapi.io/users',
			user
		)
		localStorage.setItem('id', res.data.id)
		localStorage.setItem('name', data.name)
		localStorage.setItem('password', data.password)
	} catch (error) {
		console.warn(error)
	}
}