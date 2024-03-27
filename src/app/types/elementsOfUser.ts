export type TypeEducationElement = {
	text: string,
	date: {
		from: Date,
		to: Date
	}
}

export type TypeExperienceElement = {
	place: string,
	tools: string[],
	description: string[],
	date: {
		from: Date,
		to: Date
	}
}

export type TypeProjectElement = {
	name: string,
	description: string,
	link: string
}

export type TypeSkillElement = {
	name: string,
	level: number
}