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
import { useStore } from '@/store/user'
import { ChangeEvent, FC, useState } from 'react'
import { Badge } from '../../ui/badge'

type props = {
	title: string
}
export const Feature: FC<props> = ({ title }) => {
	const [value, setValue] = useState<string>(title)
	const { changeJob, deleteJob } = useStore()

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onSubmit = (): void => changeJob(title, value)
	const onDelete = (): void => deleteJob(title)

	return (
		<Badge className='m-[5px]' variant='outline'>
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
