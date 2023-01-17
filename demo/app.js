const crypto = require('crypto');
const start = performance.now();

process.env.UV_THREADPOOL_SIZE = 8;

for (let i = 0; i < 50; i++) {
    crypto.pbkdf2('test', 'salt', 100_000, 64, 'sha512', () => {
        console.log(performance.now() - start);
    });
}

