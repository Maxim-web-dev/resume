import { ChangeEvent, FC, useEffect, useState } from 'react'
import {
	Badge,
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
	//custom
	useStore,
} from '@/main'

export const LocationDialog: FC = () => {
	const { location, setLocation, deleteLocation } = useStore()
	const [value, setValue] = useState(location)

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const handleSubmit = (): void => setLocation(value)
	const handleDelete = (): void => deleteLocation()

	useEffect(() => setValue(location), [location])
	return (
		<Dialog>
			<DialogTrigger asChild>
				<h2 className='cursor-pointer'>{location || <Badge variant='outline' className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'>
					Локация
				</Badge>}</h2>
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
							value={value}
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
