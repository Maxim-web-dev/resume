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
export const MailBadge: FC<props> = ({title}) => {
	const [mailValue, setmailValue] = useState<string>(title)
	const { setMail, deleteMail } = useStore()
	
	function handleChange(e: { target: { value: SetStateAction<string> } }) {
		setmailValue(e.target.value)
	}
	function handleSubmit() {
		setMail(mailValue)
	}
	function handleDelete() {
		deleteMail()
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
							<Label htmlFor='mail' className='text-right'>
								Локация
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
