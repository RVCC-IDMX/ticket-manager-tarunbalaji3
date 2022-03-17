const chalk = require('chalk');

class EmailService {
  send(email) {
    this.email = email;
    console.log(chalk.hex('#FF3131').bold(`Sending email to ${email}`));
  }
}

module.exports = EmailService