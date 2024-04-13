import { ChangeEvent, FC, useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Button,
	Input,
	Label,
} from '@/shared/shadcn'
import { JobBadge } from './badge'
import { useStore } from '@/app/store'

export const JobCard: FC = () => {
	const [value, setValue] = useState('')
	const { job, addJob } = useStore()

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onSubmit = (): void => addJob(value)

	return (
		<Dialog>
			<div className='flex items-center justify-center'>
				<div className='flex items-center gap-1'>
					{job?.map((el, index) => (
						<JobBadge title={el} id={index} key={index} />
					))}
				</div>
				<DialogTrigger asChild>
					{job?.length < 3 && (
						<div className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'>
							{job?.length ? 'Добавить' : 'Работа'}
						</div>
					)}
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
	)
}
