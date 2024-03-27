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
	Label,
	Button,
	// Custom
	useStore,
	Textarea,
} from '@/main'

interface props {
	indexOfCard: number
}
export const ControlPanel: FC<props> = ({ indexOfCard }) => {
	const { education, changeEducation } = useStore()
	const [value, setValue] = useState<string>(education[indexOfCard].text)

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setValue(e.target.value)

	const handleSubmit = () => changeEducation(indexOfCard, value)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<p className='cursor-pointer'>{education[indexOfCard].text || 'Обучение'}</p>
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
						<Textarea
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
						<Button onClick={handleSubmit}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
