// Los tests van en archivos *.spec.js (pueden usar JSX).
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-esbuild'],
    files: [
      'src/**/*.spec.js',
      // Las imágenes de public/ se sirven para que los tests no muestren 404
      { pattern: 'public/**/*', included: false, served: true, watched: false },
    ],
    proxies: { '/img/': '/base/public/img/' },
    preprocessors: { 'src/**/*.spec.js': ['esbuild'] },
    esbuild: { jsx: 'automatic', loader: { '.js': 'jsx' } },
    browsers: ['ChromeHeadless'],
    singleRun: true,
  })
}
