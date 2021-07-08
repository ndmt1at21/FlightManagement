export const tw = (
	...classes: (false | null | string | undefined)[]
): string => {
	return classes.filter(Boolean).join(' ');
};
