
function addUser(arr, userObj) {
    arr = arr.filter(a => { return a.name == userObj.name })

    if (arr == false){
        arr.push(userObj)
        console.log(`User added successfully!`)
    }
    else{
        console.log(`User already axists.`)
    }
    return arr
}

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];

const newUser =     {
    name: 'Raju',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS','EXPRESS'],
    age: 16
};

console.log(addUser(users, newUser))