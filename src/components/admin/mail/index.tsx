import { ChangeEvent, FC, useEffect, useState } from 'react'
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
	// Custom
	useStore,
	Badge,
} from '@/main'

export const MailDialog: FC = () => {
	const [value, setValue] = useState('')
	const { mail, setMail, deleteMail } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const handleSubmit = () => setMail(value)
	const handleDelete = () => deleteMail()

	useEffect(() => setValue(mail), [mail])
	return (
		<Dialog>
			<DialogTrigger asChild>
				<h2 className='cursor-pointer'>{mail || <Badge variant='outline' className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'>
					Почта
				</Badge>}</h2>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Изменить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='mail' className='text-right'>
							Почта
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
	)
}
