
const esbuild = require('esbuild')
const { stylusLoader } = require('esbuild-stylus-loader')

require('dotenv').config()

const chokidar = require('chokidar')
const liveserver = require('live-server')

const filesToBuild = [ 'src/main.js' ]
const pathToWatch = 'src/**/*.*'

const compileJS = () => {
  esbuild.build({
    entryPoints: filesToBuild,
    outfile: 'dist/bundle.js',

    bundle: true,
    minify: false,
    sourcemap: true,

    plugins: [
      stylusLoader()
    ],

  }).then(() => {
    console.log('✨ success!')
  }).catch(() => {
    console.log('🚨 error')
  })
}

let watcher = chokidar.watch(pathToWatch,
  {
    persistent: true
  }
)

watcher.on('ready', async () => {
  compileJS();

  watcher.on('add', compileJS)
  watcher.on('change', compileJS)

})

liveserver.start({
  open: false,
  host: '0.0.0.0',
  port: 3000,
  root: 'dist',
  loglevel: 0
})
