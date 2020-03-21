const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8001;

app.use(bodyParser.json());
app.listen(port, () => {
    console.log('Server started at port ', port);
});

app.route('/api/cats').get((req, res) => {
    console.log('app.route("/api/cats")');
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }],
    })
})

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body)
})

app.route('/api/cats/:name').get((req, res) => {
    console.log('app.route("/api/cats/:name")');
    const requestedCatName = req.params['name'];
    res.send({
        cats: { name: requestedCatName },
    })
})

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body)
})

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
  })

  
