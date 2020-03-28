const crypto = require("crypto");

module.exports = function generateUniqueId() {
  //GERA um id aleatório Exemplo 4d5504b8
  return crypto.randomBytes(4).toString("HEX");
};
