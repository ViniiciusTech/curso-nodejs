import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('Hello Wolrd')

    return response.end()
})

server.listen(3333)

// localhost:3333