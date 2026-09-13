const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Node.js Docker Application</title>
        </head>

        <body>

            <h1>Node.js Application</h1>

            <h2>Running inside Docker</h2>

            <p>Deployed on AWS EC2</p>

            <p>Application Port: 3000</p>

        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        application: "Node.js"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Node.js application running on port ${PORT}`);
});
