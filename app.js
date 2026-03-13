const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

let userName = "";

// Home page
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f1440;
        }

        .card {
          width: 90%;
          max-width: 560px;
          background: #1f2554;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 50px 40px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

        h1 {
          font-size: 56px;
          margin-bottom: 20px;
          color: #9b87ff;
          font-weight: bold;
        }

        p {
          color: #aeb4d0;
          font-size: 18px;
          margin-bottom: 35px;
        }

        input {
          width: 100%;
          padding: 18px 20px;
          font-size: 22px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.12);
          outline: none;
          background: #252b5d;
          color: white;
          margin-bottom: 28px;
        }

        input::placeholder {
          color: #8d93b3;
        }

        button {
          width: 100%;
          padding: 18px;
          font-size: 18px;
          font-weight: bold;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          color: white;
          background: linear-gradient(90deg, #6d6df8, #6a63ff);
        }

        button:hover {
          opacity: 0.95;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome</h1>
        <p>Please enter your name to receive a greeting.</p>

        <form action="/submit" method="POST">
          <input type="text" name="name" placeholder="Enter your name" required />
          <button type="submit">Get Greeting</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

// POST request
app.post("/submit", (req, res) => {
  userName = req.body.name;
  res.redirect("/greeting");
});

// Greeting page
app.get("/greeting", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Greeting</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f1440;
        }

        .card {
          width: 90%;
          max-width: 560px;
          background: #1f2554;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 70px 40px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

        h1 {
          font-size: 58px;
          color: #9b87ff;
          font-weight: bold;
          margin-bottom: 35px;
        }

        a {
          text-decoration: none;
          color: #aeb4d0;
          font-size: 18px;
          font-weight: bold;
        }

        a:hover {
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Hello, ${userName}!</h1>
        <a href="/">Go Back</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});