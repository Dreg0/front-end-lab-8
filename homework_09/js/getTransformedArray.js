function getTransformedArray(array, func) {
	var newArr = [];
	forEach(array, function (value) {
		newArr.push(func(value));
	});
	return newArr;
}