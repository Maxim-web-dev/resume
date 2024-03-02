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
	Badge,
	Button,
	Label,
	//custom
	useStore,
	PlaceItem,
} from '@/main'

interface props {
	id: number
}
export const PlaceDialog: FC<props> = ({ id }) => {
	const { experience, addPlace } = useStore()

	const [place, setPlace] = useState('')

	const changePlace = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setPlace(e.target.value)
	}
	const savePlace = () => addPlace(place, id)

	return (
		<div className='flex items-center justify-center gap-[10px] flex-wrap'>
			<h2 className='flex items-center font-medium text-[22px]'>
				Место работы: &nbsp;
				{experience[id].place && (
					<PlaceItem id={id} place={experience[id].place} />
				)}
			</h2>
			<Dialog>
				<DialogTrigger asChild>
					{!experience[id].place && <Badge variant='secondary'>+</Badge>}
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Добавить</DialogTitle>
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
								onChange={changePlace}
								value={place}
							/>
						</div>
					</div>
					<DialogFooter className='sm:justify-between'>
						<DialogClose asChild>
							<Button onClick={savePlace}>Сохранить</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
