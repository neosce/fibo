const fibonacci = require('./../native_modules/build/Release/fibonacci');

exports.getFibonacci = (req, res, next) => {
    res.status(200).json({
        fibonacci: fibonacci.get()
    })
}
