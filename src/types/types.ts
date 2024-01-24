export type TypeForm = {
	name: string,
	password: string
}
export type TypeStore = {
	name: string,
	setName: (name: string) => void,
	job: string[],
	setJob: (newJob: string) => void,
	changeJob: (prevJob: string, newJob: string) => void,
	deleteJob: (job: string) => void
}