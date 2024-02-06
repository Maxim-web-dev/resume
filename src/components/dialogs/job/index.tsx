import { Feature } from '@/components/dialogs/job/badge'
import { useStore } from '@/store/user'

import { ChangeEvent, useState } from 'react'

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
	const [value, setValue] = useState('')
	const { job, setJob } = useStore()

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onSubmit = ():void => setJob(value)

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
								placeholder='Пример: middle frontend-разработчик'
								value={value}
								onChange={onChange}
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button onClick={onSubmit}>Сохранить</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
