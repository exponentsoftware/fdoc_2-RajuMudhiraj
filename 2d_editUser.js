
function editUser(arr, userObj) {
    let index = arr.findIndex(x => x.name === userObj.searchWith.name)


    if (index != -1) {
        arr[index] = userObj.replaceWith;

        console.log(`User updated successfully!`)
    }
    else {
        console.log(`User doesn't axists.`)
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

const newData = {
    searchWith: { name: "Thomas" },
    replaceWith: {
        name: 'Albert',
        scores: 95,
        skills: ['React', 'Express', 'Postgres'],
        age: 16
    }
};


console.log(editUser(users, newData))