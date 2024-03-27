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

export const AddLinkButton: FC<props> = ({ indexOfCard }) => {
	const { projects, setLinkOfProject } = useStore()

	const [link, setLink] = useState('')

	const changelink = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setLink(e.target.value)
	}
	const saveLink = (): void => {
		setLinkOfProject(link, indexOfCard)
		setLink('')
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{!projects[indexOfCard]?.link.length && (
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
							Ссылка
						</Label>
						<Input
							id='place'
							className='col-span-3'
							onChange={changelink}
							value={link}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={saveLink}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
