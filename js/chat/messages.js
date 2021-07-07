import { URL_MESSAGES } from './constants.js'

let messages = Object.create(Set, {
    fetch: {
        value: function() {
            console.log('messages.fetch')
            fetch(URL_MESSAGES, {
                mode: 'no-cors'
            }).then(r => r.json()).then(list => )
            return this
        }
    }
})

class MessagesView {
    constructor (container, provider) {
        console.assert(container instanceof HTMLElement, 'Container must be HTMLElement')

        this.render()
        provider.on('update', this.update)
    }
}

export {
    messages,
    MessagesView
}