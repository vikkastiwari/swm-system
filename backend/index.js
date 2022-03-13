const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoDBUri = config.get('mongoUri');

mongoose
  .connect(mongoDBUri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connection established!');
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ exposedHeaders: ['x-auth-token'] }));

// app.use('/', (req, res) => {
//   return res.send(`All is well!`);
// });


app.use('/other', require('./routes/other'));
app.use('/auth', require('./routes/auth'));
app.use('/bin', require('./routes/bin'));
app.use('/binType', require('./routes/binType'));
app.use('/vehicle', require('./routes/vehicle'));
app.use('/user', require('./routes/user'));

app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    
    return res
      .status(500)
      .send({
        success: false,
        alerts: [{ type: 'error', message: 'Server error occured.' }],
      });
  }
});

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
