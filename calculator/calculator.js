function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(num) {
	// const values = Array.from(num);
	if (num.length == 0) {
		return 0;
	}
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return num.reduce(reducer);
}

function multiply (num) {
	// const values = Array.from(num);
	const reducerMultiply = (accumulator, currentValue) => accumulator * currentValue;
	return num.reduce(reducerMultiply);
}

function power(a, b) {
	return a ** b;
}

function factorial(num) {
	if(num === 0) {
		return 1;
	}
	const values = [];
	const reducerFactorial = (accumulator, currentValue) => accumulator * currentValue;
	for(let i=num; i>=1; i--) {
		values.push(i)
	}
	return values.reduce(reducerFactorial);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}