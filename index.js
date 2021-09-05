const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('body', function (req) { return JSON.stringify(req.body) })

// app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
// app.use(morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'), '-',
//       tokens['response-time'](req, res), 'ms'
//     ].join(' ')
//   }))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p>`
        +`<p>${new Date()}</p>`
    )
})

app.get('/api/persons/:id', (request, response) => {
    id = Number(request.params.id)

    person = persons.find(p => p.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    id = Number(request.params.id)

    persons = persons.filter(p => p.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Name or number missing'
        })
    }

    if (persons.find(p => p.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id : Math.floor(Math.random() * (99999 - 37 + 1)) + 37,
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    response.json(person)
})

app.put('/api/persons/:id', (request, response) => {
    id = Number(request.params.id)
    body = request.body

    if (!body){
        return response.status(400).json({
            error: 'content missing'
        })
    }

    modifiedPerson = persons.find(person => person.id === id)

    if (modifiedPerson) {
        modifiedPerson.number = body.number;
        persons = persons.map(person => person.id !== id ? person : modifiedPerson)
        
        return response.json(modifiedPerson)
    } else {
        return response.status(400).json({
            error: 'id not found'
        })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// https://pure-earth-77659.herokuapp.com/api/persons