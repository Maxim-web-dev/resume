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
import { ChangeEvent, FC, useState } from 'react'

interface props {
	title: string
} 
export const MailBadge: FC<props> = ({title}) => {
	const [value, setValue] = useState<string>(title)
	const { setMail, deleteMail } = useStore()
	
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
	const handleSubmit = (): void => setMail(value)
	const handleDelete = (): void => {
		deleteMail()
		setValue('')
	}
	return (
		<div className='flex'>
			<Dialog>
				<div className='flex'>
					<DialogTrigger asChild>
						<h2 className='cursor-pointer'>{title}</h2>
					</DialogTrigger>
				</div>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Изменить</DialogTitle>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='mail' className='text-right'>
								Локация
							</Label>
							<Input
								id='mail'
								type='email'
								className='col-span-3'
								placeholder='Пример: user@gmail.com'
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
		</div>
	)
}
