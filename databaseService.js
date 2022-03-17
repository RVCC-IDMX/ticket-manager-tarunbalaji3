const chalk = require('chalk');

class DatabaseService {
  save(email, price, timestamp) {
    this.email = email;
    this.price = price;
    this.timestamp = timestamp;
    console.log(chalk.hex('#FFFFFF').bold(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${this.email}, ${this.price}, ${this.timestamp})`));
    }
}

module.exports = DatabaseService