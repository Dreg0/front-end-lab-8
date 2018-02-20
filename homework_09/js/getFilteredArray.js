function getFilteredArray(array, func) {
	var newArr = [];
	forEach(array, function (value) {
		if (func(value)) {
			newArr.push(value);
		}
	});
	return newArr;
}