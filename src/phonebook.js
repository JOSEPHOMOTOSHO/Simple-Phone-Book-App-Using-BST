import Node from "./node";

  class PhoneBook {
    constructor() {
      this.root = null;
    }

    // add unique phone number
    AddNumber(phoneNumber, email, name) {
      //validation
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (typeof phoneNumber !== "string" || phoneNumber.length !== 11)
        return "Invalid PhoneNumber";
      if (typeof name !== "string") return "Invalid Name";
      if (!regex.test(email)) return "Invalid Email";
      if (this.GetNumber(phoneNumber)) return "Phone Number already exists";
      if (this.DoesEmailExist(email)) return "Email already exists";

      let node = new Node(phoneNumber, email, name);
      if (!this.root) {
        this.root = node;
        return this;
      }
      let current = this.root;
      while (current) {
        if (phoneNumber === current.phoneNumber) return null;
        if (phoneNumber < current.phoneNumber) {
          if (!current.left) {
            current.left = node;
            return this;
          }
          current = current.left;
        }
        if (phoneNumber > current.phoneNumber) {
          if (!current.right) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }

    //method to get details by number
    GetNumber(phoneNumber) {
      if (!this.root) return false;
      let current = this.root;
      while (current) {
        if (phoneNumber === current.phoneNumber)
          return {
            phoneNumber,
            name: current.name,
            email: current.email,
            dateCreated: current.dateCreated,
          };
        if (phoneNumber < current.phoneNumber) {
          if (!current.left) {
            return null;
          }
          current = current.left;
        }
        if (phoneNumber > current.phoneNumber) {
          if (!current.right) {
            return null;
          }
          current = current.right;
        }
      }
    }

    //get all numbers
    GetAllNumbers() {
      let data = [];
      let current = this.root;
      function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node.phoneNumber);
        if (node.right) traverse(node.right);
      }
      traverse(current);
      return data;
    }

    //check if an email is unique
    DoesEmailExist(email) {
      if (!this.root) return false;
      let current = this.root;
      while (current) {
        if (email === current.email) return true;
        if (email < current.email) {
          if (!current.left) {
            return false;
          }
          current = current.left;
        }
        if (email > current.email) {
          if (!current.right) {
            return false;
          }
          current = current.right;
        }
      }
    }
  }
  
  