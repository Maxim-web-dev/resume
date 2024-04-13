import { FC } from 'react'
import style from './about.module.css'
import { Badge } from '@/shared/shadcn'
export const AboutPage: FC = () => {
	return (
		<div className={style.wrapper}>
			<h1>О проекте</h1>
			<p>
				Проект "Resume" написан на <Badge variant='green'>React</Badge>,
				используя <Badge variant='green'>TypeScript</Badge> и{' '}
				<Badge variant='green'>Zustand</Badge>.
			</p>
			<p>Идея проекта: создание резюме с возможностью делиться по ссылке.</p>
			<p>
				Ссылка на GitHub:{' '}
				<Badge variant='green'>
					<a target='_blank' href='https://github.com/Maxim-web-dev/resume'>
						https://github.com/Maxim-web-dev/resume
					</a>
				</Badge>
			</p>
			<p>Автор: <Badge variant='green'>Максим Ханукаев</Badge></p>
		</div>
	)
}
