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
import { FC, SetStateAction, useState } from 'react'
type props = {
	title: string,
}
export const Feature: FC<props> = ({ title }) => {
	const [jobValue, setJobValue] = useState<string>(title)
	const { changeJob, deleteJob } = useStore()

	function handleChange(e: { target: { value: SetStateAction<string> } }) {
		setJobValue(e.target.value)
	}
	function handleSubmit() {
		changeJob(title, jobValue)
	}
	function handleDelete() {
		deleteJob(title)
	}
	return (
		<Dialog>
			<div className='flex'>
				<DialogTrigger asChild>
					<h2 className='text-white cursor-pointer'>{title}</h2>
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
							value={jobValue}
							onChange={handleChange}
						/>
					</div>
				</div>
				<DialogFooter className='sm:justify-between'>
					<DialogClose asChild>
						<Button variant='destructive' onClick={handleDelete}>
							Удалить
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button onClick={handleSubmit}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
