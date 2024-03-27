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
	//custom
	useStore,
} from '@/main'
import { Link2Icon } from '@radix-ui/react-icons'

interface props {
	indexOfCard: number
}

export const LinkItem: FC<props> = ({ indexOfCard }) => {
	const { projects, setLinkOfProject, deleteLinkOfProject } = useStore()

	const [link, setLink] = useState(projects[indexOfCard].link)

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setLink(e.target.value)
	}
	const handleSubmit = () => setLinkOfProject(link, indexOfCard)
	const handleDelete = () => deleteLinkOfProject(indexOfCard)

	// против ошибок (без этого в некоторых случаях некорректно отображалось value в Input)
	useEffect(
		() => setLink(projects[indexOfCard].link),
		[projects[indexOfCard].link]
	)

	return (
		<Dialog>
			<DialogTrigger asChild>
				{projects[indexOfCard].link && (
					<div className='flex items-center gap-1'>
						<Link2Icon />
						<p className='cursor-pointer text-sm bg-gradient-to-r from-[#D8AE5E] to-[#3A82F7] bg-no-repeat bg-[length:85%_4px] bg-left-bottom'>
							{projects[indexOfCard].link}
						</p>
					</div>
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
							onChange={handleChange}
							value={link}
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
