const express = require('express')
const app = express()
const PORT = 8000

const goalies = {
    'igor shesterkin': { 
        'name': 'Igor Shesterkin',
        'gamesPlayed': 53,
        'goalsAgainst': 106,
        'expectedGoalsAgainst': 140.1,
        'GAA': 2.07,
        'puckFreezes': 311,
        'goalsAgainst': 106
    },
    'andrei vasilevskiy': {
        'name': 'Andrei Vasilevskiy',
        'gamesPlayed': 63,
        'goalsAgainst': 156,
        'expectedGoalsAgainst': 184.41,
        'GAA': 2.49,
        'puckFreezes': 405,
        'goalsAgainst': 156
    },
    'unknown': {
        'name': 'unknown'
    },
    'frederik anderson': {
        'name': 'Frederik Anderson',
        'gamesPlayed': 52,
        'goalsAgainst': 111,
        'expectedGoalsAgainst': 138.82,
        'GAA': 2.17,
        'puckFreezes': 290,
        'goalsAgainst': 111
    },
    'sergei bobrovsky': {
        'name': 'Sergei Bobrovsky',
        'gamesPlayed': 54,
        'goalsAgainst': 137,
        'expectedGoalsAgainst': 160.39,
        'GAA': 2.67,
        'puckFreezes': 350,
        'goalsAgainst': 137
    },
    'darcy kuemper': {
        'name': 'Darcy Kuemper',
        'gamesPlayed': 57,
        'goalsAgainst': 138,
        'expectedGoalsAgainst': 158.97,
        'GAA': 2.54,
        'puckFreezes': 437,
        'goalsAgainst': 138
    },
    'juuse saros': {
        'name': 'Juuse Saros',
        'gamesPlayed': 67,
        'goalsAgainst': 173,
        'expectedGoalsAgainst': 193.69,
        'GAA': 2.64,
        'puckFreezes': 524,
        'goalsAgainst': 173
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const goalieName = req.params.name.toLowerCase()
    if(goalies[goalieName]){
        res.json(goalies[goalieName])
    }else{
        res.json(goalies['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log('Sever is running')
})