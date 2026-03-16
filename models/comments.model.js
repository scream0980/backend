import mongoose from 'mongoose'

const commentsSchema = new mongoose.Schema({})

export const Comments = mongoose.model('Comments',commentsSchema)