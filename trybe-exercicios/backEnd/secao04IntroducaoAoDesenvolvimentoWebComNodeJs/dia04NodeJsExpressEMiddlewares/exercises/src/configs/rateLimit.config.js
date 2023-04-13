const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
   max: 100, // número máximo de requisições
   windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
   message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
});

module.exports = limiter;