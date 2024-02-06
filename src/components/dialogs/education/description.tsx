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
import { Label } from '@/components/ui/label'
import { ChangeEvent, FC, useState } from 'react'
import { Badge } from '../../ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { useStore } from '@/store/user'

type props = {
	title: string
}
export const Description: FC<props> = ({ title }) => {
	const { setEducation, deleteEducation } = useStore()

	const [ value, setValue ] = useState<string>(title)

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>): void => setValue(e.target.value) 
	const onSubmit = (): void => setEducation(value)
	const onDelete = (): void => {
		deleteEducation()
		setValue('')
	}
	return (
		<Badge className='m-[5px]' variant='outline'>
			<Dialog>
				<div className='flex'>
					<DialogTrigger asChild>
						<h2 className='text-black cursor-pointer'>{title ? title : 'Не указано'}</h2>
					</DialogTrigger>
				</div>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Изменить</DialogTitle>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='text' className='text-right'>
								Образование
							</Label>
							<Textarea
								id='text'
								className='col-span-3'
								placeholder='Пример: прошел курсы от Яндекс.'
								value={value}
								onChange={onChange}
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
							<Button onClick={onSubmit}>Сохранить</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</Badge>
	)
}
