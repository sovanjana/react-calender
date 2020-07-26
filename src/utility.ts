export function chunk<T>(data: Array<T>, size: number): Array<Array<T>> {
	const arr = [];
	let i = 0;
	while (i < data.length) {
		arr.push(data.slice(i, size + i));
		i += size;
	}
	return arr;
}