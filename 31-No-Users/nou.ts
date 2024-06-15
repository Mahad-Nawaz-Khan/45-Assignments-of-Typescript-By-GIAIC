/*31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */



let usernames : string[] = ["Asjad", "Mahad", "Ajwad", "admin", "Ali"];

let empty = false;

while (!empty){
    if (usernames.length === 0){
        empty = true;
    } else {
        usernames.pop();
    }
} 


if(usernames.length === 0){
    console.log('We need to find some new Users!')
} else {       
    usernames.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
}


