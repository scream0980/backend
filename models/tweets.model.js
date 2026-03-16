import mongoose from 'mongoose'

const tweetsSchema = new mongoose.Schema({})

export const Tweets = mongoose.model('Tweets',tweetsSchema)