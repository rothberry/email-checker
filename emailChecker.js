/**
 * @param   {array[]}   emails
 * @return  {number[]}  unique emails
 * Problem statement:
 * Accept a list of email addresses and return an integer indicating the number of unique email addresses.
 * Where "unique" email addresses means they will be delivered to the same account using Gmail account matching.
 * Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".
 * test.email@gmail.com == test.email+spam@gmail.com == testemail@gmail.com
 */

const emails = [
  "test.email@gmail.com",
  "test.email+spam@gmail.com",
  "testemail@gmail.com",
  "test2@gmail.com",
  "it.works.email@gmail.com",
]

const emailTransform = email => {
  return email
    .split("@")[0]
    .split("+")[0]
    .split(".")
    .join("")
}

const emailChecker = emails => {
  let uniqueEmails = []
  for (let i = 0; i < emails.length; i++) {
    let email = emailTransform(emails[i])
    if (!uniqueEmails.includes(email)) {
      uniqueEmails.push(email)
    }
  }
  return uniqueEmails.length
}

console.log(emailChecker(emails))
