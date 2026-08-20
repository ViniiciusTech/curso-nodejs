import { fastify } from 'fastify' 
import { DataBaseMemory } from './database-memory.js'

const server = fastify()

const database = new DataBaseMemory()

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body



     database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

server.get('/videos', (request) => {
    const search = request.query.search

    console.log(search)

    const videos = database.list(search)

    return  videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId =  request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})