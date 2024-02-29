import { FC } from 'react'
import {
	Button,
	PlaceDialog,
	ProblemsDialog,
	ToolsDialog,
	useStore,
} from '@/main'
import { Trash2 } from 'lucide-react'

import style from './controlPanel.module.css'

interface props {
	id: number
}

export const ControlPanel: FC<props> = ({ id }) => {
	const { experience, deleteExperience } = useStore()

	const onClick = (): void => deleteExperience(id)

	const isDisabled = experience.length == 1 ? true : false

	return (
		<div className={style.div}>
			<button disabled={isDisabled} onClick={onClick} className={style.button}>
				<Trash2 className='z-[10]' color='white' />
			</button>
			<div className='flex flex-col gap-5'>
				<PlaceDialog id={id} />
				<ToolsDialog id={id} />
				<ProblemsDialog id={id} />
			</div>
		</div>
	)
}
