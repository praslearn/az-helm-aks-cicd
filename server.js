const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('App called');
    res.status(200).json({ 'Message': 'API is working' });
})


app.use(express.json());

app.listen(30007, () => {
    console.log('App is listening to port no 30007');
});