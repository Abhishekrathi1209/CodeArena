const express = require('express');
const problems = require('./src/routes/problems');
const userauth = require('./src/routes/userauth')
const authentication = require('./src/middleware/authentication')
const submitcode = require('./src/routes/submitcode')
const cors = require('cors');
// const contests = require('./routes/contests');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use('/api/auth', userauth)
app.use('/api/problems', problems);
app.use('/api/submitcode', authentication, submitcode)
// app.use('api/pastsubmission', pastsubmission)
// app.use('/api/contests', contests);



app.listen(PORT, () => { console.log('Running') });