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
	Badge,
	Button,
	// Custom
	MailBadge,
	useStore,
} from '@/main'
import { Mail } from 'lucide-react'

export const MailDialog: FC = () => {
	const [value, setValue] = useState('')
	const { mail, setMail } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const handleSubmit = (): void => setMail(value)

	return (
		<div className='flex items-center gap-[0px]'>
			<Mail color='white' className='mr-1'/>
			<Dialog>
				<div className='flex'>
					<MailBadge title={mail} />
					{mail?.length === 0 && (
						<DialogTrigger asChild>
							<Badge variant='secondary'>{mail ? mail : 'Почта'}</Badge>
						</DialogTrigger>
					)}
				</div>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Добавить</DialogTitle>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='input' className='text-right'>
								Почта
							</Label>
							<Input
								id='input'
								type='email'
								className='col-span-3'
								placeholder='Пример: user@gmail.com'
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
