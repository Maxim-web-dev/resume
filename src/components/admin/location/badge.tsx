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
	Label,
	Button,
	//custom
	useStore,
} from '@/main'

interface props {
	title: string
}
export const LocationBadge: FC<props> = ({ title }) => {
	const [locationValue, setLocationValue] = useState<string>(title)
	const { setLocation, deleteLocation } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setLocationValue(e.target.value)
	}
	const handleSubmit = (): void => setLocation(locationValue)
	const handleDelete = (): void => deleteLocation()

	return (
		<Dialog>
			<DialogTrigger asChild>
				<h2 className='cursor-pointer text-white'>{title}</h2>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Изменить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='location' className='text-right'>
							Локация
						</Label>
						<Input
							id='location'
							className='col-span-3'
							placeholder='Пример: Москва'
							value={locationValue}
							onChange={handleChange}
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