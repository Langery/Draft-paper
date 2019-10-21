const { series } = require('gulp')

function clean (cb) {
	cb()
}

function  build(cb) {
	cb()
}
// exports.default = defaultTask
exports.build = build
exports.default = series(clean, build)

// var gulp = require('gulp')

// gulp.task('default', () => {
// 	console.log('Hello World!')
// })
