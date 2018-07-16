module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/index.js': 'src/js/*.js',
        'js/vendor.js': [/^node_modules/, 'vendor/js/*.js']
      }
    },

    stylesheets: {
      joinTo: {
        'css/screen.css': 'src/css/screen.scss'
      }
    }
  },

  paths: {
    public: 'assets/',
    watched: ['src']
  },

  npm: {
    globals: {
      $: 'jquery',
      jQuery: 'jquery'
    },

    compilers: [
      'babel-brunch'
    ]
  },

  plugins: {
    babel: {
      ignore: [
        /^node_modules/
      ],
      presets: ['env', ['airbnb', {
        targets: {
          browsers: ['last 3 versions', 'safari >= 7']
        }
      }]]
    },

    sass: {
      options: {
        mode: 'native',
        includePaths: ['node_modules'],
        sourceMapEmbed: true
      }
    },

    postcss: {
      processors: [
        require('autoprefixer')(['last 3 versions']),
      ]
    },

    copycat: {
      'images': 'src/images',
      'fonts': 'src/fonts',
      './': ['src/screenshot-desktop.jpg', 'src/screenshot-mobile.jpg'],
      verbose: true,
      onlyChanged: true
    }
  },

  modules: {
    nameCleaner: path => path.replace(/^src\/js\//, '')
  }
};
