require('colors')

class Logger {
  info (...value) {
    const output = {
      message: value,
      type: 'info',
    }
    process.stdout.write(JSON.stringify(output).green + '\n')
  }

  log (...value) {
    const output = {
      message: value,
      type: 'log',
    }
    process.stdout.write(JSON.stringify(output) + '\n')
  }
  warning (...value) {
    const output = {
      message: value,
      type: 'warning',
    }
    process.stderr.write(JSON.stringify(output).grey + '\n')
  }
  error (e) {
    const output = {
      message: e,
      type: 'error',
    }
    process.stderr.write(JSON.stringify(output).red + '\n')
  }

  debug (...value) {
    // if (global.app.environment !== 'prod') {
    const output = {
      message: value,
      type: 'debug',
    }
    process.stdout.write(JSON.stringify(output).yellow + '\n')
    // }
  }
}

module.exports = new Logger()
