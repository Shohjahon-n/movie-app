import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())

let data = [
    { id: 1, name: 'Movie 1' },
    { id: 2, name: 'Movie 2' },
];

app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(5000, () => console.log(`server running on http://localhost:5000`))