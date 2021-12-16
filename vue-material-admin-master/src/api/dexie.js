import Dexie from 'dexie'

const localDb = new Dexie('chat')
db.version(1).stores({
    message: 'id,message,created_at',
})

export default localDb