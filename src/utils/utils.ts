export const isNumber = (str: string): boolean =>
	!Number.isNaN(str) && !Number.isNaN(parseFloat(str))
