import { FC, useEffect, useState, ChangeEvent } from 'react'
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
	Label
} from '@/shared/shadcn'
import { TooltipItem } from './tooltip'

interface props {
	indexOfSkill: number
}

export const SkillItem: FC<props> = ({ indexOfSkill }) => {
	const { skills, changeSkill, deleteSkill } = useStore()

	const [skill, setSkill] = useState({ name: '', level: 0 })

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setSkill({ ...skill, [e.target.id]: e.target.value })
	}

	const saveSkill = (): void => {
		changeSkill(skill.name, skill.level, indexOfSkill)
	}

	const handleDeleteSkill = (): void => {
		deleteSkill(indexOfSkill)
	}

	useEffect(() => {
		setSkill({
			name: skills[indexOfSkill]?.name,
			level: skills[indexOfSkill]?.level,
		})
	}, [skills[indexOfSkill]?.name, skills[indexOfSkill]?.level])
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div>
					<TooltipItem indexOfSkill={indexOfSkill} />
				</div>
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
							id='name'
							className='col-span-3'
							onChange={handleInputChange}
							value={skill.name}
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
							onChange={handleInputChange}
							value={skill.level}
							max={100}
							min={0}
							maxLength={3}
						/>
					</div>
				</div>
				<DialogFooter className='sm:justify-between'>
					<DialogClose asChild>
						<Button variant='destructive' onClick={handleDeleteSkill}>
							Удалить
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button onClick={saveSkill}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
