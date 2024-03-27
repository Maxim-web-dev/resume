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
	Label,
	//custom
	useStore,
	Textarea,
} from '@/main'

interface props {
	indexOfCard: number
}

export const AddDescriptionButton: FC<props> = ({ indexOfCard }) => {
	const { projects, setDescriptionOfProject } = useStore()

	const [description, setDescription] = useState('')

	const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		e.preventDefault()
		setDescription(e.target.value)
	}
	const saveDescription = (): void => {
		setDescriptionOfProject(description, indexOfCard)
		setDescription('')
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{!projects[indexOfCard]?.description.length && (
					<div className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'>
						Добавить
					</div>
				)}
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Добавить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='place' className='text-right'>
							Описание
						</Label>
						<Textarea
							id='place'
							className='col-span-3'
							onChange={changeDescription}
							value={description}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={saveDescription}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

// DO: on 'view user page' сделать 'projects'