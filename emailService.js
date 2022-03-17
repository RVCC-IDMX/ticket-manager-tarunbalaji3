const chalk = require('chalk');

class EmailService {
  send(email) {
    this.email = email;
    console.log(chalk.hex('#FFC0CB').bold(`Sending email to ${email}`));
  }
}

module.exports = EmailService