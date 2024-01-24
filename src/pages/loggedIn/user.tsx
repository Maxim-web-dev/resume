import { Feature } from '@/components/feature'
import { useStore } from '@/store/user'

import axios from 'axios'
import { SetStateAction, memo, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TypeForm } from '@/types/types'

export default function User() {
	const [jobValue, setJobValue] = useState('')
	const { job, setJob } = useStore()

	function handleChange(e: { target: { value: SetStateAction<string> } }) {
		setJobValue(e.target.value)
	}
	function handleSubmit() {
		setJob(jobValue)
	}
	const [user, setUser] = useState<TypeForm>()

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
	console.log('render');
	
	return (
		<div>
			<h1 className='text-[#E2E8F0]'>
				{user?.name ? user.name : 'Loading...'}
			</h1>
			<Dialog>
				<div className='flex'>
					{
						job
							.map(el => (
								<Feature title={el} key={el} />
							))
					}
					<DialogTrigger asChild>
						<Button variant='secondary'>Добавить</Button>
					</DialogTrigger>
				</div>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Добавить</DialogTitle>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='job' className='text-right'>
								Дожность
							</Label>
							<Input
								id='job'
								className='col-span-3'
								value={jobValue}
								onChange={handleChange}
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button onClick={handleSubmit}>Сохранить</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}