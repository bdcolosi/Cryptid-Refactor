const db = require("./conn");
const bcrypt = require('bcrypt');


class Users {
  constructor(id, email, username, password, email_verified) {
    this.is = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.email_verified = email_verified;
  }
  checkpassword(hashedPassword) {
    return bcrypt.compareSync(this.password, hashedPassword);

  }
  async newUser() {
    try {
      const response = await db.one(
        "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id;",
        [this.email, this.username, this.password]
      );
      return response;
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }

  async userLogin() {
    try {

      const response = await db.one(`SELECT * FROM users WHERE username = $1;`, [
        this.username
      ]);
      console.log("response is", response);
      const isValid = this.checkpassword(response.password);
      if (!!isValid) {
        const { id, username } = response;
        return { isValid, id, username };
      } else {
        return { isValid };
      }
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }
}

module.exports = Users;
