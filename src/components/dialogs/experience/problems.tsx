import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useStore } from '@/store/user'

type props = {
	problem: string,
	id: number, 
	index: number
}
const ProblemItem: FC<props> = ({ problem, id, index }) => {
	const [value, setValue] = useState<string>(problem)
	const { changeProblem, deleteProblem } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onChange = (): void => changeProblem(id, value, index)
	const onDelete = (): void => deleteProblem(id, index)
	// против ошибок (без этого в некоторых случаях некорректно отображалось value в Input)
	useEffect(() => {
		setValue(problem)
	}, [problem])
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Badge>{problem}</Badge>
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
export default ProblemItem
