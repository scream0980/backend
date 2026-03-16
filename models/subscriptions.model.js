import mongoose from 'mongoose'

const subscriptionsSchema = new mongoose.Schema({})

export const Subscriptions = mongoose.model('Subscriptions',subscriptionsSchema)