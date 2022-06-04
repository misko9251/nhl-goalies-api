const express = require('express')
const app = express()
const cors = require('cors')
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
    },
    'jonathan quick': {
        'name': 'Jonathan Quick',
        'gamesPlayed': 46,
        'goalsAgainst': 116,
        'expectedGoalsAgainst': 133.8,
        'GAA': 2.59,
        'puckFreezes': 246,
        'goalsAgainst': 116
    },
    'connor hellebuyck': {
        'name': 'Connor Hellebuyck',
        'gamesPlayed': 66,
        'goalsAgainst': 193,
        'expectedGoalsAgainst': 209.65,
        'GAA': 2.97,
        'puckFreezes': 419,
        'goalsAgainst': 193
    },
    'ville husso': {
        'name': 'Ville Husso',
        'gamesPlayed': 40,
        'goalsAgainst': 100,
        'expectedGoalsAgainst': 113.54,
        'GAA': 2.56,
        'puckFreezes': 267,
        'goalsAgainst': 100
    },
    'ilya sorokin': {
        'name': 'Ilya Sorokin',
        'gamesPlayed': 52,
        'goalsAgainst': 123,
        'expectedGoalsAgainst': 135.77,
        'GAA': 2.40,
        'puckFreezes': 287,
        'goalsAgainst': 123
    },
    'tristan jarry': {
        'name': 'Tristan Jarry',
        'gamesPlayed': 58,
        'goalsAgainst': 138,
        'expectedGoalsAgainst': 150.76,
        'GAA': 2.42,
        'puckFreezes': 366,
        'goalsAgainst': 138
    },
    'jacob markstrom': {
        'name': 'Jacob Markstrom',
        'gamesPlayed': 63,
        'goalsAgainst': 137,
        'expectedGoalsAgainst': 147.84,
        'GAA': 2.22,
        'puckFreezes': 437,
        'goalsAgainst': 137
    },
    'thatcher demko': {
        'name': 'Thatcher Demko',
        'gamesPlayed': 64,
        'goalsAgainst': 168,
        'expectedGoalsAgainst': 178.5,
        'GAA': 2.72,
        'puckFreezes': 486,
        'goalsAgainst': 168
    },
    'anton forsberg': {
        'name': 'Anton Forsberg',
        'gamesPlayed': 46,
        'goalsAgainst': 121,
        'expectedGoalsAgainst': 129.46,
        'GAA': 2.82,
        'puckFreezes': 352,
        'goalsAgainst': 121
    },
    'robin lehner': {
        'name': 'Robin Lehner',
        'gamesPlayed': 44,
        'goalsAgainst': 120,
        'expectedGoalsAgainst': 126.07,
        'GAA': 2.83,
        'puckFreezes': 227,
        'goalsAgainst': 120
    },
    'linus ullmark': {
        'name': 'Linus Ullmark',
        'gamesPlayed': 41,
        'goalsAgainst': 95,
        'expectedGoalsAgainst': 100.69,
        'GAA': 2.45,
        'puckFreezes': 320,
        'goalsAgainst': 95
    },
    'jeremy swayman': {
        'name': 'Jeremy Swayman',
        'gamesPlayed': 41,
        'goalsAgainst': 96,
        'expectedGoalsAgainst': 100.15,
        'GAA': 2.41,
        'puckFreezes': 279,
        'goalsAgainst': 96
    },
    'elvis merzlikins': {
        'name': 'Elvis Merzlikins',
        'gamesPlayed': 59,
        'goalsAgainst': 178,
        'expectedGoalsAgainst': 182.03,
        'GAA': 3.22,
        'puckFreezes': 447,
        'goalsAgainst': 178
    },
    'jake oettinger': {
        'name': 'Jake Oettinger',
        'gamesPlayed': 48,
        'goalsAgainst': 114,
        'expectedGoalsAgainst': 115.43,
        'GAA': 2.53,
        'puckFreezes': 293,
        'goalsAgainst': 114
    },
    'james reimer': {
        'name': 'James Reimer',
        'gamesPlayed': 48,
        'goalsAgainst': 129,
        'expectedGoalsAgainst': 129.12,
        'GAA': 2.90,
        'puckFreezes': 354,
        'goalsAgainst': 129
    },
    'jack campbell': {
        'name': 'Jack Campbell',
        'gamesPlayed': 49,
        'goalsAgainst': 123,
        'expectedGoalsAgainst': 120.66,
        'GAA': 2.64,
        'puckFreezes': 406,
        'goalsAgainst': 123
    },
    'vitek vanecek': {
        'name': 'Vitek Vanecek',
        'gamesPlayed': 42,
        'goalsAgainst': 103,
        'expectedGoalsAgainst': 97.64,
        'GAA': 2.67,
        'puckFreezes': 233,
        'goalsAgainst': 103
    },
    'cam talbot': {
        'name': 'Cam Talbot',
        'gamesPlayed': 49,
        'goalsAgainst': 132,
        'expectedGoalsAgainst': 126.16,
        'GAA': 2.76,
        'puckFreezes': 327,
        'goalsAgainst': 132
    },
    'carter hart': {
        'name': 'Carter Hart',
        'gamesPlayed': 45,
        'goalsAgainst': 137,
        'expectedGoalsAgainst': 130.44,
        'GAA': 3.16,
        'puckFreezes': 378,
        'goalsAgainst': 137
    },
    'mikko koskinen': {
        'name': 'Mikko Koskinen',
        'gamesPlayed': 45,
        'goalsAgainst': 136,
        'expectedGoalsAgainst': 129.16,
        'GAA': 3.10,
        'puckFreezes': 330,
        'goalsAgainst': 136
    },
    'alex nedeljkovic': {
        'name': 'Alex Nedeljkovic',
        'gamesPlayed': 59,
        'goalsAgainst': 178,
        'expectedGoalsAgainst': 171.07,
        'GAA': 3.31,
        'puckFreezes': 410,
        'goalsAgainst': 178
    },
    'ilya samsonov': {
        'name': 'Ilya Samsonov',
        'gamesPlayed': 44,
        'goalsAgainst': 119,
        'expectedGoalsAgainst': 106.94,
        'GAA': 3.02,
        'puckFreezes': 246,
        'goalsAgainst': 119
    },
    'john gibson': {
        'name': 'John Gibson',
        'gamesPlayed': 56,
        'goalsAgainst': 172,
        'expectedGoalsAgainst': 157.74,
        'GAA': 3.19,
        'puckFreezes': 433,
        'goalsAgainst': 172
    },
    'marc-andre fleury': {
        'name': 'Marc-Andre Fleury',
        'gamesPlayed': 56,
        'goalsAgainst': 159,
        'expectedGoalsAgainst': 141.39,
        'GAA': 2.90,
        'puckFreezes': 334,
        'goalsAgainst': 159
    },
    'karel vejmelka': {
        'name': 'Karel Vejmelka',
        'gamesPlayed': 52,
        'goalsAgainst': 170,
        'expectedGoalsAgainst': 146.8,
        'GAA': 3.68,
        'puckFreezes': 409,
        'goalsAgainst': 170
    },
    'philip grubauer': {
        'name': 'Philip Grubauer',
        'gamesPlayed': 55,
        'goalsAgainst': 164,
        'expectedGoalsAgainst': 130.26,
        'GAA': 3.16,
        'puckFreezes': 351,
        'goalsAgainst': 164
    }
}

app.use(express.static('public'));
app.use(cors());

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

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Sever is running')
})