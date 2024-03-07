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
	id: number
}
export const AddToolButton: FC<props> = ({ id }) => {
	const [tool, setTool] = useState('')

	const { experience, addTool } = useStore()

	const changeTool = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setTool(e.target.value)
	}
	const saveTool = (): void => {
		addTool(id, tool)
		setTool('')
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{experience[id]?.tools?.length < 10 && (
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
							Технология
						</Label>
						<Input
							id='place'
							className='col-span-3'
							placeholder='Пример: JavaScript'
							onChange={changeTool}
							value={tool}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={saveTool}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
