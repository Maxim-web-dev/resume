import { ChangeEvent, FC, useState } from 'react'
import {
	Badge,
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
} from '@/shared/shadcn'
import { useStore } from '@/app/store'

interface props {
	title: string,
	id: number
}
export const JobBadge: FC<props> = ({ title, id }) => {
	const [value, setValue] = useState<string>(title)
	const { changeJob, deleteJob } = useStore()

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onSubmit = (): void => changeJob(id, value)
	const onDelete = (): void => deleteJob(id)

	return (
		<Badge className='m-[5px]' variant='secondary'>
			<Dialog>
				<div className='flex'>
					<DialogTrigger asChild>
						<h2 className='cursor-pointer'>{title}</h2>
					</DialogTrigger>
				</div>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Изменить</DialogTitle>
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
					<DialogFooter className='sm:justify-between'>
						<DialogClose asChild>
							<Button variant='destructive' onClick={onDelete}>
								Удалить
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button onClick={onSubmit}>Сохранить</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</Badge>
	)
}
