// Типизация объектов
type TypeUser = {
	name: string,
	age: number,
	location: string,
}
type abc = {
	a: string,
	b: number,
	c: boolean,
}
const user: TypeUser = {
	name: 'aaa',
	age: 1,
	location: 'xas'
}
const abcwd:abc = {
	a: 's',
	b: 2,
	c: true
}
const all: TypeUser & abc = {
	...user,
	...abcwd
}

// Массивы
const a:string[] = []

const b: ReadonlyArray<number> = [34, 22]

type s = [string, string, number]
const sa: s = ['', '', 1]

// Функции
type fnReturn = {
	name: string
}
function snja(name: string): fnReturn {
	return {name}
}
snja('')

type fn = (name: string) => fnReturn

const fna: fn = (name) => {
	return {name}
}
const dw = (...ages: number[]) => {
	return ages
}

// Перегрузки
function car (name: string): string
function car (name: string, price: number): string

function car (name: string, price?: number): string {
	return price ? `name: ${name}, price: ${price}` : `name: ${name}`
}

const car1 = car('', 121)
const car2 = car('')


// Interface

interface iCar {
	name: string,
	price: number
}
const career: iCar = {
	name:'',
	price:0
} 
// С помощью interface нельзя описывать функции
// type fn = () => {}

type snxa = {
	s: string
}
type dons = {
	dskjbn: boolean
} & snxa
const pdkm: dons = {
	dskjbn: false,
	s: ''
}

interface nsl {
	LSN: string
}
interface csd extends nsl{
	ele: number
}
const adcs: csd = {
	ele: 2,
	LSN: ''
}


// enum (как const)
const enum dew {
	day,
	meadle,
	night
}

interface dson {
	role: dew
}
const time: dson = {
	role: dew.day
}


// Generics
// const getAge = <T>(args: T):T => {
// 	return args
// }
function getName<T> (args: T):T {
	return args
}

getName<string>('')

type oas<T, V> = {
	djod: T,
	dklcms: V
}

const kjldn: oas<boolean, string> = {
	djod: false,
	dklcms: '',
}


type sdc = {
	length: number
} 
function dsk<T extends sdc>(umb: T): number {
	return umb.length
}

dsk('')



