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
	ProblemItem,
} from '@/main'

interface props {
	id: number
}

export const ProblemsDialog: FC<props> = ({ id }) => {
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
		<div className='w-full flex flex-col items-center justify-center gap-[10px] flex-wrap'>
			<h2 className='flex font-medium text-[22px]'>Задачи</h2>
			<div className='flex flex-col gap-2 w-full'>
				{experience[id]?.description?.map((problem, index) => (
					<ProblemItem problem={problem} key={index} id={id} index={index} />
				))}
			</div>
			<Dialog>
				<DialogTrigger asChild>
					{experience[id].description.length < 4 && (
						<Badge variant='secondary'>+</Badge>
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
					<DialogFooter className='sm:justify-between'>
						<DialogClose asChild>
							<Button onClick={saveProblem}>Сохранить</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
