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
import { MailBadge } from './badge'
import { Mail } from 'lucide-react';

export default function MailDialog() {
	const [mailValue, setMailValue] = useState('')
	const { mail, setMail } = useStore()

	function handleChange(e: { target: { value: SetStateAction<string> } }) {
		setMailValue(e.target.value)
	}
	function handleSubmit() {
		setMail(mailValue)
	}

	return (
		<div className='flex items-center'>
			<Mail strokeWidth={2} fill='white'/>
			<Dialog>
				<div className='flex'>
					<div className='flex'>
						<MailBadge title={mail}/>
					</div>
					{mail.length === 0 ? (
						<DialogTrigger asChild>
							<Button variant='secondary'>
								Почта
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
								Почта
							</Label>
							<Input
								id='mail'
								type='email'
								className='col-span-3'
								value={mailValue}
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
