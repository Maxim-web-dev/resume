
export type TypeStore = {
	name: string,
	setName: (name: string) => void,

	job: string[],
	setJob: (newJob: string) => void,
	changeJob: (prevJob: string, newJob: string) => void,
	deleteJob: (job: string) => void,

	location: string,
	setLocation: (location: string) => void,
	deleteLocation: () => void,

	mail: string,
	setMail: (mail: string) => void,
	deleteMail: () => void,

	education: string,
	setEducation: (education: string) => void,
	deleteEducation: () => void
}