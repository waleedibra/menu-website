const ar = [
    {
        name: 'anakin darth',
        age: 27,
        height: '205cm',

    },
    {
        name: 'luke sky',
        age: 45,
        height: '175cm',

    },
]

const charNames = ar.map((ar) => ({name: ar.name.split(' ')[1], age:ar.age}))

console.log(charNames)