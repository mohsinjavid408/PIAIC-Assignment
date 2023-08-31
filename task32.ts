let current_users: string[] = ['admin', 'Eric', 'John', 'Jane', 'Alice'];
let new_users: string[] = ['John', 'Sarah', 'Mike', 'Eric', 'Linda'];

for (let i = 0; i < new_users.length; i++) {
    let usernameExists: boolean = false;

    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }

    if (usernameExists) {
        console.log(`The username '${new_users[i]}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_users[i]}' is available.`);
    }
}

// The username 'John' is not available. Please enter a new username.
// The username 'Sarah' is available.
// The username 'Mike' is available.
// The username 'Eric' is not available. Please enter a new username.
// The username 'Linda' is available.