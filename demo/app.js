// const start = performance.now();
// console.log(`Час на підготовку: ${Math.floor(start)}мс`);

// setTimeout(() => {
//     console.log(`Повний час: ${Math.floor(performance.now())}мс`);
//     console.log(`Час роботи таймера: ${Math.floor(performance.now() - start)}мс`);
//     console.log('Пройшла 1 секунда.');
// }, 1000);



function user(name) {
    console.log(`Ім'я користувача - ${name}.`);
}

setTimeout(user, 2000, 'Yarik');