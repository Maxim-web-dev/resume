type TypeExperience = {
	place: string,
	tools: string[],
	description: string[]
}

type TypeProjects = {
	name: string,
	description: string,
	link: string
}

type TypeSkills = {
	name: string,
	level: number
}

export type TypeUser = {
	id: number,
	name: string,
	password: string,
	about: {
		job: string[],
		location: string,
		mail: string
	},
	education: string[],
	experience: TypeExperience[],
	projects: TypeProjects[],
	skills: TypeSkills[]
}