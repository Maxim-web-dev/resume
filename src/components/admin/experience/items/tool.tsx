import { ChangeEvent, FC, useEffect, useState } from 'react'
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
	id: number
	index: number
}

export const ToolItem: FC<props> = ({ id, index }) => {
	const { experience, changeTool, deleteTool } = useStore()

	const [value, setValue] = useState<string>(experience[id].tools[index])

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onChange = () => changeTool(id, value, index)
	const onDelete = () => deleteTool(id, index)

	// против ошибок (без этого в некоторых случаях некорректно отображалось value в Input)
	useEffect(
		() => setValue(experience[id].tools[index]),
		[experience[id].tools[index]]
	)
	return (
		<Dialog>
			<DialogTrigger asChild id='trigger'>
				<p className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer'>
					{experience[id]?.tools[index]}
				</p>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Изменить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='place' className='text-right'>
							Технология
						</Label>
						<Input
							id='place'
							className='col-span-3'
							placeholder='Пример: JavaScript'
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
