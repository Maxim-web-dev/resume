import { Feature } from '@/components/dialogs/job/badge'
import { useStore } from '@/store/user'

import { SetStateAction, useState } from 'react'

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

export default function JobDialog() {
	const [jobValue, setJobValue] = useState('')
	const { job, setJob } = useStore()

	function handleChange(e: { target: { value: SetStateAction<string> } }) {
		setJobValue(e.target.value)
	}
	function handleSubmit() {
		setJob(jobValue)
	}

	console.log('render')

	return (
		<div>
			<Dialog>
				<div className='flex'>
					<div className='flex'>
						{job.map(el => (
							<Feature title={el} key={el} />
						))}
					</div>
					<DialogTrigger asChild>
						<Button variant='secondary'>
							{job.length === 0 ? 'Работа' : 'Добавить'}
						</Button>
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
