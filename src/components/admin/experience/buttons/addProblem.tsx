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
	Badge,
} from '@/main'

interface props {
	id: number
}

export const AddProblemButton: FC<props> = ({ id }) => {
	const { experience, addProblem } = useStore()

	const [problem, setProblem] = useState('')

	const changeProblem = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setProblem(e.target.value)
	}
	const saveProblem = (): void => {
		addProblem(id, problem)
		setProblem('')
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{experience[id]?.description?.length < 4 && (
					<Badge variant='outline' className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'>
					Добавить
				</Badge>
				)}
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Добавить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='place' className='text-right'>
							Что делали?
						</Label>
						<Input
							id='place'
							className='col-span-3'
							placeholder='Пример: поддерживал микросервисы'
							onChange={changeProblem}
							value={problem}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={saveProblem}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
