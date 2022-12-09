const { greet, users } = require('./func');

for (let user of users) {
    greet(user);
}