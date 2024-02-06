import { useStore } from '@/store/user'

import { ChangeEvent, SetStateAction, useState } from 'react'

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
import { Badge } from '@/components/ui/badge'
import { MailBadge } from './badge'
import { Mail } from 'lucide-react';

export default function MailDialog() {
	const [value, setValue] = useState('')
	const { mail, setMail } = useStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()
		setValue(e.target.value)
	}
	const handleSubmit = (): void => setMail(value)

	return (
		<div className='flex items-center gap-[7px]'>
			<Mail strokeWidth={2} />
			<Dialog>
				<div className='flex'>
					<div className='flex'>
						<MailBadge title={mail}/>
					</div>
					{mail.length === 0 ? (
						<DialogTrigger asChild>
							<Badge variant='default' className='cursor-pointer'>
								{ mail ? mail : 'Не указано'}
							</Badge>
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
