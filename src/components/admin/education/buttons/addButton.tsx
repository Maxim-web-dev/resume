import { ChangeEvent, FC, useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Textarea,
	Label,
	Button,
	//custom
	useStore,
} from '@/main'

export const AddButton: FC = () => {
	const { addEducation } = useStore()
	const [text, setText] = useState<string>('')

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setText(e.target.value)

	const onSubmit = () => {
		addEducation(text)
		setText('')
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className='bg-[#242634] p-2 rounded-xl inline-flex items-center'>
					+
				</button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Добавить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='text' className='text-right'>
							Обучение
						</Label>
						<Textarea
							id='text'
							className='col-span-3'
							placeholder='Пример: прошел курсы от Яндекс.'
							value={text}
							onChange={onChange}
							maxLength={90}
						/>
					</div>
				</div>
				<DialogFooter className='sm:justify-between'>
					<DialogClose asChild>
						<Button onClick={onSubmit}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
