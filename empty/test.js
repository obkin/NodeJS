
const user = {
    firstname: 'Yaroslav',
    surname: 'Gudz'
};

let { firstname, surname } = user;

console.log(firstname);
console.log(surname);


(function() {
    let [ firstname, surname ] = [ 'Yarik', 'Gudz' ]

    console.log(firstname);
    console.log(surname);
}())