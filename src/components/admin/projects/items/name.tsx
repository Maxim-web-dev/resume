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
	indexOfCard: number
}

export const NameItem: FC<props> = ({ indexOfCard }) => {
	const { projects, setNameOfProject, deleteNameOfProject } = useStore()

	const [name, setName] = useState(projects[indexOfCard].name)

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setName(e.target.value)
	}
	const handleSubmit = () => setNameOfProject(name, indexOfCard)
	const handleDelete = () => deleteNameOfProject(indexOfCard)

	useEffect(
		() => setName(projects[indexOfCard].name),
		[projects[indexOfCard].name]
	)

	return (
		<Dialog>
			<DialogTrigger asChild>
				{projects[indexOfCard].name && (
					<p className='cursor-pointer text-sm'>{projects[indexOfCard].name}</p>
				)}
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Изменить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='input' className='text-right'>
							Название
						</Label>
						<Input
							id='input'
							className='col-span-3'
							placeholder='Пример: Яндекс'
							onChange={handleChange}
							value={name}
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
