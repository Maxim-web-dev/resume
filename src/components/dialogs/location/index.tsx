import { useStore } from '@/store/user'

import { SetStateAction, useState } from 'react'

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

export default function LocationDialog() {
	const [locationValue, setLocationValue] = useState('')
	const { location, setLocation } = useStore()

	function handleChange(e: { target: { value: SetStateAction<string> } }) {
		setLocationValue(e.target.value)
	}
	function handleSubmit() {
		setLocation(locationValue)
	}

	return (
		<div className='flex items-center'>
			<MapPin strokeWidth={1} color='white'/>
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
								value={locationValue}
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
