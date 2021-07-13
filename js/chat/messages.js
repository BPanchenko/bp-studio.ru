import { URL_MESSAGES } from './constants.js'

class Message extends Map {
    constructor(data) {
        data instanceof Array || (data = _.toPairs(data))
        super(data)
    }
}

class Messages extends Set {
    fetch() {
        console.log('messages.fetch')
        let endpoint = `${URL_MESSAGES}?fallback`
        fetch(endpoint).then(r => r.json()).then(r => this.#addList(r.data))
        return this
    }

    add(data) {
        if (data instanceof Array) return this.#addList(data)
        data instanceof Message || (data = new Message(data)) 
        super.add(data)
        return this
    }

    #addList(data) {
        console.assert(data instanceof Array, `Wrong type parameter: ${JSON.stringify(data)}`)
        data.forEach(this.add.bind(this))
        console.log(this)
    }
}

class MessagesView {
    constructor (container, provider) {
        console.assert(container instanceof HTMLElement, 'Container must be HTMLElement')

        this.render()
        provider.on('update', this.update)
    }
}

export {
    Messages,
    MessagesView
}