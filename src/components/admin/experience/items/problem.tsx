import { ChangeEvent, FC, useEffect, useState } from 'react'
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
import { useStore } from '@/app/store'

interface props {
	id: number
	index: number
}

export const ProblemItem: FC<props> = ({ id, index }) => {
	const { experience, changeProblem, deleteProblem } = useStore()

	const [value, setValue] = useState<string>(experience[id].description[index])

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onChange = (): void => changeProblem(id, value, index)
	const onDelete = (): void => deleteProblem(id, index)

	useEffect(
		() => setValue(experience[id].description[index]),
		[experience[id].description[index]]
	)
	return (
		<Dialog>
			<DialogTrigger asChild>
				<p className='cursor-pointer'>
					{experience[id].description[index] || 'Задача'}
				</p>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Изменить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='place' className='text-right'>
							Что делали?
						</Label>
						<Input
							id='place'
							className='col-span-3'
							placeholder='Пример: поддерживал микросервисы'
							onChange={handleChange}
							value={value}
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
						<Button onClick={onChange}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
