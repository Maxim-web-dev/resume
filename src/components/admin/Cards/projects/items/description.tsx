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
	Label,
	//custom
	useStore,
	Textarea,
} from '@/main'

interface props {
	indexOfCard: number
}

export const DescriptionItem: FC<props> = ({ indexOfCard }) => {
	const { projects, setDescriptionOfProject, deleteDescriptionOfProject } = useStore()

	const [description, setDescription] = useState(projects[indexOfCard].description)

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		e.preventDefault()
		setDescription(e.target.value)
	}
	const handleSubmit = () => setDescriptionOfProject(description, indexOfCard)
	const handleDelete = () => deleteDescriptionOfProject(indexOfCard)

	// против ошибок (без этого в некоторых случаях некорректно отображалось value в Input)
	useEffect(() => setDescription(projects[indexOfCard].description), [projects[indexOfCard].description])

	return (
		<Dialog>
			<DialogTrigger asChild>
				{projects[indexOfCard].description && (
					<p className='cursor-pointer text-sm'>{projects[indexOfCard].description}</p>
				)}
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Изменить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='input' className='text-right'>
							Описание
						</Label>
						<Textarea
							id='input'
							className='col-span-3'
							onChange={handleChange}
							value={description}
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
