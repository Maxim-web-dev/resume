import { ChangeEvent, FC, useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Button,
	Label,
	//custom
	useStore,
} from '@/main'

interface props {
	indexOfCard: number
}

export const AddNameButton: FC<props> = ({ indexOfCard }) => {
	const { projects, setNameOfProject } = useStore()

	const [name, setName] = useState('')

	const changeName = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setName(e.target.value)
	}
	const saveName = (): void => {
		setNameOfProject(name, indexOfCard)
		setName('')
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{!projects[indexOfCard]?.name.length && (
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
							Название
						</Label>
						<Input
							id='place'
							className='col-span-3'
							onChange={changeName}
							value={name}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={saveName}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
