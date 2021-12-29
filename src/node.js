export default class Node {
    constructor(phoneNumber, Email, Name) {
      this.phoneNumber = phoneNumber;
      this.email = Email;
      this.name = Name;
      this.dateCreated = new Date().toDateString();
      this.left = null;
      this.right = null;
    }
  }
  