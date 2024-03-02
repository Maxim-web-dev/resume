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
	Badge,
	Label,
	//custom
	useStore,
	JobBadge,
} from '@/main'
import { Briefcase } from 'lucide-react'

export const JobDialog: FC = () => {
	const [value, setValue] = useState('')
	const { job, addJob } = useStore()

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onSubmit = (): void => addJob(value)

	return (
		<Dialog>
			<div className='flex items-center'>
				<div className='flex items-center gap-1'>
					<Briefcase color='white' />
					{job?.map((el, index) => (
						<JobBadge title={el} id={index} key={index} />
					))}
				</div>
				<DialogTrigger asChild>
					{job?.length < 3 && (
						<Badge variant='secondary' className='h-full mx-2'>
							{job.length === 0 ? 'Работа' : 'Добавить'}
						</Badge>
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
