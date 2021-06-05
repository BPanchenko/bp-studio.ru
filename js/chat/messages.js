import { URL_MESSAGES } from './constants'

let messages = Object.create(Set, {
    fetch: {
        value: await function() {
            let result = async fetch(URL_MESSAGES)
            return this
        }
    }
})

export default messages