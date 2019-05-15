const server = require('./api/server');

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`\n** Your API is running on http://localhost:${port} **\n`)
});