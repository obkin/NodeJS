// const start = performance.now();
// console.log(`Час на підготовку: ${Math.floor(start)}мс`);

// setTimeout(() => {
//     console.log(`Повний час: ${Math.floor(performance.now())}мс`);
//     console.log(`Час роботи таймера: ${Math.floor(performance.now() - start)}мс`);
//     console.log('Пройшла 1 секунда.');
// }, 1000);



// function user(name) {
//     console.log(`Ім'я користувача: ${name}`);

// }

// setTimeout(user, 1500, 'Yarik');


// const timerId = setTimeout(() => {
//     console.log('BOOOM!'); 
// }, 3000);

// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('Was cleared.');
// }, 1000);



// const intervalId = setInterval(() => {
//     console.log(performance.now());
// }, 1000);


// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Очищено!');
// }, 5055);




// console.log('Перший');

// setImmediate(() => {
//     console.log('Другий');
// });

// console.log('Третій');



const timerId = setTimeout(() => {
    console.log('BOOOM!');
}, 5000);

timerId.unref();


setImmediate(() => {
    timerId.ref();
});

