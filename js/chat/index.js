import { URL_MESSAGES } from './constants.js'
import { SID } from './init.js'
import {
    Messages,
    MessagesView
} from './messages.js'

let messages = new Messages()
messages.fetch()
