
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let result = [];

	if (matrix == undefined) {
		return result;
	}

	matrix.map((item, index) => {
		if (index == 1 || index % 2 > 0) {
			item.reverse();
		}
		result.push(...item);
	});

	return result;
}
