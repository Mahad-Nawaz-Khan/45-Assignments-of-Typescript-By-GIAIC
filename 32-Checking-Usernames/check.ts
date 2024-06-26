/*32. Checking Usernames: Do the following to create a program that
 simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. 
  Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
  If it has, print a message that the person will need to enter a new username.
  If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */


let current_users : string[] = ["Asjad", "Mahad", "Ajwad", "admin", "Ali"];

let new_users : string[] = ["asjad", "Raheel", "AJWAD", "sikandar", "Jahangir"];

for (let i = 0; i < new_users.length; i++) {

  let new_user = new_users[i].toLowerCase();
  let current_user = current_users[i].toLowerCase();

  if (new_user === current_user) {
    console.log("The username " + new_users[i] + " has already been used.");
  } else {
    console.log("The username " + new_users[i] + " is available.");
  }
}
