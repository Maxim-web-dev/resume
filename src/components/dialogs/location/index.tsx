import { useStore } from '@/store/user'

import { ChangeEvent, FC, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LocationBadge } from './badge'
import { MapPin } from 'lucide-react';

export const LocationDialog: FC = () => {
	const [ value, setValue ] = useState('')
	const { location, setLocation } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const handleSubmit = (): void => setLocation(value)

	return (
		<div className='flex items-center'>
			<MapPin strokeWidth={2} />
			<Dialog>
				<div className='flex'>
					<div className='flex'>
						<LocationBadge title={location}/>
					</div>
					{location.length === 0 ? (
						<DialogTrigger asChild>
							<Button variant='secondary'>
								Локация
							</Button>
						</DialogTrigger>
					) : (
						''
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
