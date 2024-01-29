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
import { useStore } from '@/store/user'
import { FC, SetStateAction, useState } from 'react'

interface props {
	title: string
} 
export const LocationBadge: FC<props> = ({title}) => {
	const [locationValue, setLocationValue] = useState<string>(title)
	const { setLocation, deleteLocation } = useStore()
	
	function handleChange(e: { target: { value: SetStateAction<string> } }) {
		setLocationValue(e.target.value)
	}
	function handleSubmit() {
		setLocation(locationValue)
	}
	function handleDelete() {
		deleteLocation()
	}
	return (
		<div className='flex'>
			<Dialog>
				<div className='flex'>
					<DialogTrigger asChild>
						<h2 className='text-white cursor-pointer'>{title}</h2>
					</DialogTrigger>
				</div>
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
		</div>
	)
}