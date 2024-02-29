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
	Badge,
	Button,
	Label,
	//custom
	useStore,
} from '@/main'

interface props {
	tool: string
	id: number
	index: number
}

export const ToolItem: FC<props> = ({ tool, id, index }) => {
	const [value, setValue] = useState<string>(tool)
	const { changeTool, deleteTool } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onDelete = (): void => deleteTool(id, index)
	const onChange = (): void => changeTool(id, value, index)
	// против ошибок (без этого в некоторых случаях некорректно отображалось value в Input)
	useEffect(() => {
		setValue(tool)
	}, [tool])
	return (
		<Dialog>
			<DialogTrigger asChild id='trigger'>
				<Badge className='text-sm'>{tool}</Badge>
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