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

server.get('/videos', () => {
    const videos = database.list()

    return  videos
})

server.put('/videos/:id', () => {
    return 'Hello World'
})

server.delete('/videos/:id', () => {
    return 'Hello World'
})

server.listen({
    port: 3333,
})