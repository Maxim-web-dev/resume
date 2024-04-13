export const useMatchMedia = () => {
	// Проверка на мобильное устройство
	const mediaQueryList = window.matchMedia('(min-width: 850px)')
	return mediaQueryList.matches
}