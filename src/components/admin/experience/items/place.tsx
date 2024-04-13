import { ChangeEvent, FC, useEffect, useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Button,
	Input,
	Label,
} from '@/shared/shadcn'
import { useStore } from '@/app/store'

interface props {
	indexOfCard: number
}

export const PlaceItem: FC<props> = ({ indexOfCard }) => {
	const { experience, changePlace, deletePlace } = useStore()

	const [value, setValue] = useState<string>(experience[indexOfCard].place)

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onChange = () => changePlace(value, indexOfCard)
	const onDelete = () => deletePlace(indexOfCard)

	useEffect(
		() => setValue(experience[indexOfCard].place),
		[experience[indexOfCard].place]
	)

	return (
		<Dialog>
			<DialogTrigger asChild>
				{experience[indexOfCard].place ? (
					<p className='cursor-pointer'>{experience[indexOfCard].place}</p>
				) : (
					<div className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer'>
						Добавить
					</div>
				)}
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Изменить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='place' className='text-right'>
							Место работы
						</Label>
						<Input
							id='place'
							className='col-span-3'
							placeholder='Пример: Яндекс'
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
