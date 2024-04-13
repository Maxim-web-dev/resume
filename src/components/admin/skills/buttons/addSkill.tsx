import { FC, ChangeEvent, useState } from 'react'
import { useStore } from '@/app/store'
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
} from '@/shared/shadcn'

export const AddSkillButton: FC = () => {
	const { skills, addSkill } = useStore()

	const [skill, setSkill] = useState('')
	const [level, setLevel] = useState(0)

	const changeSkillInput = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setSkill(e.target.value)
	}
	const changeLevelInput = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setLevel(e.target.valueAsNumber)
	}
	const saveSkill = (): void => {
		addSkill(skill, level)
		setSkill('')
		setLevel(0)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{skills?.length < 20 || !skills ? (
					<div className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'>
						Добавить
					</div>
				): ''}
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Добавить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='skill' className='text-right'>
							Навык или технология
						</Label>
						<Input
							id='skill'
							className='col-span-3'
							onChange={changeSkillInput}
							value={skill}
						/>
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='level' className='text-right'>
							Владение навыком (0-100%)
						</Label>
						<Input
							id='level'
							className='col-span-3'
							type='number'
							onChange={changeLevelInput}
							value={level}
							max={100}
							min={0}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={saveSkill}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
