// Los tests van en archivos *.spec.js (pueden usar JSX).
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-esbuild'],
    files: ['src/**/*.spec.js'],
    preprocessors: { 'src/**/*.spec.js': ['esbuild'] },
    esbuild: { jsx: 'automatic', loader: { '.js': 'jsx' } },
    browsers: ['ChromeHeadless'],
    singleRun: true,
  })
}
