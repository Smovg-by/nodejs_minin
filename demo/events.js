const EventsEmitter = require('events')

// const emitter = new EventsEmitter() // создаем объект инстанс класса

// // создаем событие
// emitter.on('anything', data => {
//   console.log('ON: anything', data)
// })

// // выпускаем событие
// emitter.emit('anything', { a: 1 })
// emitter.emit('anything', { b: 2 })

// setTimeout(() => {
//   emitter.emit('anything', { c: 3 })
// }, 2000)

class Dispatcher extends EventsEmitter {
  subscribe (eventName, cb) {
    console.log('subscribe...')
    this.on(eventName, cb)
  }

  dispatch (eventName, data) {
    console.log('dispatching...')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher()

// сначала ставим прослушку события
dis.subscribe('aa', data => {
  console.log('ON: aa', data)
})

// потом запускаем диспатчер
dis.dispatch('aa', { aa: 22 })