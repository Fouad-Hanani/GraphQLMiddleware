/*
	1. write docs
*/
module.exports = (validationFn, errorMessage, fn) => {
	return (parent, args, context, params) => {
		if (validationFn(context)) {
			return fn(parent, args, context, params);
		} else {
			throw new Error(errorMessage);
		}
	};
};
