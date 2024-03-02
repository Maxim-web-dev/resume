import { ChangeEvent, FC, useState } from 'react'
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
	LocationSVG,
	//custom
	LocationBadge,
	useStore,
} from '@/main'
import { MapPin } from 'lucide-react'

export const LocationDialog: FC = () => {
	const [value, setValue] = useState('')
	const { location, setLocation } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const handleSubmit = (): void => setLocation(value)

	return (
		<div className='flex items-center'>
			<MapPin color='white' className='mr-1'/>
			<Dialog>
				<div className='flex'>
					<div className='flex'>
						<LocationBadge title={location} />
					</div>
					{location?.length === 0 && (
						<DialogTrigger asChild>
							<Badge variant='secondary'>Локация</Badge>
						</DialogTrigger>
					)}
				</div>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Добавить</DialogTitle>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='job' className='text-right'>
								Локация
							</Label>
							<Input
								id='job'
								className='col-span-3'
								placeholder='Пример: Москва'
								value={value}
								onChange={handleChange}
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button onClick={handleSubmit}>Сохранить</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
