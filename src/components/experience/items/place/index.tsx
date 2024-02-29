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
	//custom
	useStore,
} from '@/main'

import style from './place.module.css'

interface props {
	place: string
	id: number
}

export const PlaceItem: FC<props> = ({ place, id }) => {
	const [value, setValue] = useState<string>(place)
	const { changePlace, deletePlace } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const onChange = (): void => changePlace(value, id)
	const onDelete = (): void => deletePlace(id)
	// против ошибок (без этого в некоторых случаях некорректно отображалось value в Input)
	useEffect(() => {
		setValue(place)
	}, [place])
	return (
		<Dialog>
			<DialogTrigger asChild>
				<p className={style.place}>{place}</p>
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