// Dependencies
// =============================================================
const express = require("express")
const emailChecker = require("./emailChecker")

const app = express()
const PORT = process.env.PORT || 3001

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
// =============================================================
app.get("/", (req, res) => {
  res.send("hi")
})

app.post("/check", (req, res) => {
  // Create array of only emails
  if (!!req.body.length) {
    const emails = req.body.map((data) => data.email)
    // console.log(emails)
    const numUniqEmails = emailChecker(emails)
    res.json(numUniqEmails)
  } else {
    res.send("No Emails Sent")
  }
})

// Listener
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`)
})
