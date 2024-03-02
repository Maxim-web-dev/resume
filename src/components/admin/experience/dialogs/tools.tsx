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
	Badge,
	Button,
	Label,
	//custom
	useStore,
	ToolItem,
} from '@/main'

interface props {
	id: number
}
export const ToolsDialog: FC<props> = ({ id }) => {
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
				<div className='flex flex-col items-center gap-[10px]'>
					<h2 className='flex font-medium text-[22px]'>Технологии</h2>
					<div className='flex gap-2 items-center flex-wrap'>
						{experience[id]?.tools?.map((tool, index) => (
							<ToolItem tool={tool} key={index} id={id} index={index} />
						))}
						<DialogTrigger asChild>
							{experience[id].tools.length < 10 && (
								<Badge variant='secondary'>+</Badge>
							)}
						</DialogTrigger>
					</div>
				</div>
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
					<DialogFooter className='sm:justify-between'>
						<DialogClose asChild>
							<Button onClick={saveTool}>Сохранить</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
	)
}
