import mongoose from 'mongoose'

const videosSchema = new mongoose.Schema({})

export const Videos = mongoose.model('Videos',videosSchema)