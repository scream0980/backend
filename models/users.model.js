import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({})

export const Users = mongoose.model('Users',usersSchema)