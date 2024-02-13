import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { ChangeEvent, FC, useState } from 'react'
import { useStore } from '@/store/user'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import ToolItem from './tools'
import ProblemItem from './problems'

type props = {
	id: number
}
const Description: FC<props> = ({ id }) => {
	const [tool, setTool] = useState('')
	const [problem, setProblem] = useState('')

	const { experience, addTool, addProblem } = useStore()
	const changeTool = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setTool(e.target.value)
	}
	const saveTool = (): void => {
		addTool(id, tool)
		setTool('')
	}
	const changeProblem = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setProblem(e.target.value)
	}
	const saveProblem = (): void => {
		addProblem(id, problem)
		setProblem('')
	}
	return (
		<div className='flex flex-col gap-[30px] m-8'>
			<h2>Место работы:</h2>
			<h2>{experience[id].place}</h2>
			<div className='flex items-center justify-center w-full text-black cursor-pointer gap-[10px]'>
				<h2>Технологии</h2>
				{experience[id]?.tools?.map((tool, index) => (
					<ToolItem tool={tool} key={index} id={id} index={index}/>
				))}

				<Dialog>
					<DialogTrigger asChild>
						<Badge variant='outline'>Добавить</Badge>
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
						<DialogFooter className='sm:justify-between'>
							<DialogClose asChild>
								<Button onClick={saveTool}>Сохранить</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
			<div className='flex items-center justify-center w-full text-black cursor-pointer gap-[10px]'>
				<h2>Что делали?</h2>
				{experience[id]?.description?.map((problem, index) => (
					<ProblemItem problem={problem} key={index} id={id} index={index} />
				))}
				<Dialog>
					<DialogTrigger asChild>
						<Badge variant='outline'>Добавить</Badge>
					</DialogTrigger>
					<DialogContent className='sm:max-w-[425px]'>
						<DialogHeader>
							<DialogTitle>Добавить</DialogTitle>
						</DialogHeader>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='place' className='text-right'>
									Чем занимались?
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
		</div>
	)
}

export default Description
