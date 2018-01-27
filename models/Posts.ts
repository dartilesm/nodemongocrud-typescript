import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const PostSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now 
    },
    title: {
        type: String,
        default: '',
        requiered: true
    },
    content: {
        type: String,
        default: '',
        requiered: true
    }
})

export default mongoose.model('Post', PostSchema)