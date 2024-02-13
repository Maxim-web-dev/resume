import { create } from 'zustand'
import { TypeStore } from '../types/store'

export const useStore = create<TypeStore>(set => ({
	name: '',
	setName: (name) => {
		set({ name })
		localStorage.setItem('name', name)
	},
	job: [],
	setJob: (newJob) => set(state => {
		return {
			job: [...state.job, newJob]
		}
	}),
	changeJob: (prevJob, newJob) => set(state => {
		const index = state.job.indexOf(prevJob)
		const updatedJobs = [...state.job]
		updatedJobs[index] = newJob
		return {
			job: updatedJobs
		}
	}),
	deleteJob: (job) => set(state => {
		const filteredJobs = state.job.filter(el => el !== job)
		return {
			job: filteredJobs
		}
	}),

	location: '',
	setLocation: (location) => {
		set({ location })
	},
	deleteLocation: () => set({ location: '' }),

	mail: '',
	setMail: (mail) => set({ mail }),
	deleteMail: () => set({ mail: '' }),

	education: '',
	setEducation: (education) => set({ education }),
	deleteEducation: () => set({ education: '' }),

	experience: [
		// {
		// 	place: 'Яндекс',
		// 	tools: ['React', 'TypeScript'],
		// 	description: ['Делал туду-листы','чай пил']
		// }
		{
			place: '',
			tools: [],
			description: []
		}
	],
	setExperience: (place, tools, description) => set(state => {
		const newExperience = {
			place,
			tools,
			description
		}
		return {
			experience: [...state.experience, newExperience]
		}
	}),
	changeExperience: (id, place, tools, description) => set(state => {
		const newExperience = [...state.experience]
		newExperience[id] = {
			place,
			tools,
			description
		}
		console.log(newExperience);
		return {
			experience: newExperience
		}
		
	}),

	deleteExperience: (id) => set(state => {
		const filteredExperience = state.experience.filter((el, index) => index !== id)
		return {
			experience: filteredExperience
		}
	}),
	addTool: (id, tool) => set(state => {
		const experience = [...state.experience]
		experience[id].tools = [...experience[id].tools, tool]
		console.log(experience);
		
		return {
			experience: experience
		}
	}),
	changeTool: (id, tool, index) => set(state => {
		const experience = [...state.experience]
		experience[id].tools[index] = tool
		return {
			experience: experience
		}
	}),
	deleteTool: (id, index) => set(state => {
		const experience = [...state.experience]
		experience[id].tools.splice(index, 1)
		return {
		  experience: experience
		}
	  }),
	addProblem: (id, problem) => set(state => {
		const experience = [...state.experience]
		experience[id].description = [...experience[id].description, problem]
		console.log(experience);
		return {
			experience: experience
		}
	}),
	changeProblem: (id, problem, index) => set(state => {
		// DO: Оно почему-то не изменяется, но при этом срабатывает console.log
		const experience = [...state.experience]
		experience[id].description[index] = problem
		console.log(experience);
		console.log(problem);
		
		return {
			experience: experience
		}
	}),
	deleteProblem: (id, index) => set(state => {
		
		const experience = [...state.experience]
		experience[id].description.splice(index, 1)
		console.log(experience);
		return {
		  experience: experience
		}
	  }),
	
}))