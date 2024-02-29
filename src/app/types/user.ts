type TypeExperience = {
	place: string,
	tools: string[],
	description: string[]
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
	experience: TypeExperience[]
}