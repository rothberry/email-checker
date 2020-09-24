/**
 * @param   {array[]}   emails
 * @return  {number[]}  unique emails
 * Problem statement:
 * Accept a list of email addresses and return an integer indicating the number of unique email addresses.
 * Where "unique" email addresses means they will be delivered to the same account using Gmail account matching.
 * Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".
 * test.email@gmail.com == test.email+spam@gmail.com == testemail@gmail.com
 */
const emailChecker = (emails) => {
  // Create an object with key of username and value of domain
  let emailObj = {}
  emails.forEach((email) => {
    // First separate into halves at '@'
    let arr = email.split("@")
    let [username, domain] = arr
    // console.log(username, domain)
    username = makeUsername(username)
    // If there is no username key, then insert into emailObj
    // if the username exists, then check if the array contains the domain
    if (!emailObj[username]) {
      emailObj[username] = [domain]
    } else {
      if (!emailObj[username].includes(domain)) {
        emailObj[username].push(domain)
      }
    }
  })
  const values = Object.values(emailObj)
  const uniqEmails = values.reduce((acc, val) => acc.concat(val), [])
  // console.log(emailObj)
  return uniqEmails.length
}

// Takes in the first half of the address and removes all extra characters
const makeUsername = (username) => {
  // Need to remove '.' and join, then omit anything after a '+'
  return username
    .split(".")
    .join("")
    .split("+")[0]
}

module.exports = emailChecker

// // TESTING
// const { test1, test2, test3, test4 } = require("./testData/emailData")
// const res1 = emailChecker(test1.map(data => data.email))
// const res2 = emailChecker(test2.map(data => data.email))
// const res3 = emailChecker(test3.map(data => data.email))
// const res4 = emailChecker(test4.map(data => data.email))

// console.log(`\n1:`, "result:", res1, "\texpected:", 1, "\t", res1 === 1)
// console.log(`\n2:`, "result:", res2, "\texpected:", 3, "\t", res2 === 3)
// console.log(`\n3:`, "result:", res3, "\texpected:", 1, "\t", res3 === 1)
// console.log(`\n4:`, "result:", res4, "\texpected:", 15, "\t", res4 === 15)
