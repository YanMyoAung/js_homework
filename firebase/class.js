class User {
  constructor(name, gender, email, phone) {
    Object.assign(this, { name, gender, email, phone });
  }

  info() {
    return (
      this.name + "\n" + this.gender + "\n" + this.email + "\n" + this.phone
    );
  }
}

class UserRandomGenerator {
  static async fetchData() {
    try {
      const response = await fetch("https://randomuser.me/api/");
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  static async generateRandomUserInstance() {
    let data = await this.fetchData();
    if (data) {
      const name = data.results[0].name.first + " " + data.results[0].name.last;
      const gender = data.results[0].gender;
      const email = data.results[0].email;
      const phone = data.results[0].phone;
      return new User(name, gender, email, phone);
    }
  }
}

async function getRandomUser() {
  let randomuser = await UserRandomGenerator.generateRandomUserInstance();
  return randomuser;
}

getRandomUser().then(data => console.log(data.info()));


