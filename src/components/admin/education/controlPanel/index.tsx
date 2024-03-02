import { FC } from 'react'
import { ChangeEvent, useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
	Button,
	// Custom
	useStore,
} from '@/main'
import style from './controlPanel.module.css'

interface props {
	text: string
	id: number
}
export const ControlPanel: FC<props> = ({ text, id }) => {
	const [value, setValue] = useState<string>(text)
	const { changeEducation, deleteEducation } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value)

	const handleSubmit = () => changeEducation(id, value)

	const handleDelete = (): void => {
		deleteEducation(id)
		setValue('')
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className={style.div}>
					<p className={style.text}>{text}</p>
				</div>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Изменить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='input' className='text-right'>
							Обучение
						</Label>
						<Input
							id='input'
							className='col-span-3'
							placeholder='Пример: прошел курсы от Яндекс'
							value={value}
							onChange={handleChange}
							maxLength={90}
						/>
					</div>
				</div>
				<DialogFooter className='sm:justify-between'>
					<DialogClose asChild>
						<Button variant='destructive' onClick={handleDelete}>
							Удалить
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button onClick={handleSubmit}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
