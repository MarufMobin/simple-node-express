const express = require('express');
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('Server Is Ongoing Runningz ');
});
const users = [
    { id: 0, name: "maruf", section: "A", status: "pass", group: "Science" },
    { id: 1, name: "mobin", section: "A", status: "pass", group: "Science" },
    { id: 2, name: "Shuieb", section: "A", status: "pass", group: "Science" },
    { id: 3, name: "meer", section: "A", status: "pass", group: "Science" },
    { id: 4, name: "Mukit", section: "A", status: "pass", group: "Science" },
    { id: 5, name: "Rocky", section: "A", status: "pass", group: "Science" },
    { id: 6, name: "Firoj", section: "A", status: "pass", group: "Science" },
    { id: 7, name: "Hassan", section: "A", status: "pass", group: "Science" }
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    // Use Query Parameters
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));

        res.send(searchResult)
    } else {
        res.send(users);
    }

});

app.post('/users', (req, res) =>{
    // console.log('hitting The Post ', req.body)
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//Use Dynamic Api   

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.listen(port, () => {
    console.log('Lisining Port is ', port);
})