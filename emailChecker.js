/**
 * @param   {array[]}   emails
 * @return  {number[]}  unique emails
 * Problem statement:
 * Accept a list of email addresses and return an integer indicating the number of unique email addresses.
 * Where "unique" email addresses means they will be delivered to the same account using Gmail account matching.
 * Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".
 * test.email@gmail.com == test.email+spam@gmail.com == testemail@gmail.com
 */

const emailChecker2 = emails => {
  let uniqueEmails = []
  for (let i = 0; i < emails.length; i++) {
    let email = emailTransform(emails[i])
    if (!uniqueEmails.includes(email)) {
      uniqueEmails.push(email)
    }
  }
  return uniqueEmails.length
}
const emailChecker = (emails) => {
  // Create an object with key of username and value of domain?
  // Create an object with key of domain and value of username?

  let emailObj = {}
  emails.forEach((email) => {
    // First separate into halves at '@'
    let arr = email.split("@")
    let [username, domain] = arr
    // console.log(username, domain)
    username = makeUsername(username)
    // If there is no username key, then insert into emailObj
    if (!emailObj[username]) {
      emailObj[username] = [domain]
    } else if (emailObj[username] !== domain) {
      emailObj[username].push(domain)
    }
    console.log(emailObj)
  })
  return emailObj
}

// Takes in the first half of the address and removes all extra characters
const makeUsername = (username) => {
  // Need to remove '.' and join, then omit anything after a '+'
  return username
    .split(".")
    .join("")
    .split("+")[0]
}

const test1 = [
  "test.email@gmail.com",
  "test.email+spam@gmail.com",
  "testemail@gmail.com",
]

const test2 = [
  "test.email@gmail.com",
  "test.email@fetchrewards.com",
  "test.email@hotmail.com",
]

const test3 = [
  "test.email@gmail.com",
  "test.email+spam+wowza+@gmail.com",
  "t.e.s.t.e.m.a.i.l@gmail.com",
  "t.e.s.t.e.m.a.i.l+spam0000000000@gmail.com",
]

// console.log(makeUsername('t.e.s.t+u.suckk'))
console.log(emailChecker(test1))
console.log(emailChecker(test2))
console.log(emailChecker(test3))
