import mongoose from 'mongoose'

const likesSchema = new mongoose.Schema({})

export const Likes = mongoose.model('Likes',likesSchema)