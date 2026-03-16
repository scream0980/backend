import mongoose, { mongo } from 'mongoose'

const playlistsSchema = new mongoose.Schema({})

export const Playlists = mongoose.model('Playlists',playlistsSchema)