### HOW TO USE THE PHONE BOOK

- **Store Unique Numbers** 
  ```javascript
  let phonebook = new PhoneBook()

  let number = "08168028900";
  let mail = "joe@gmail.com";
  let name = "joe";

  phonebook.AddNumber(number, mail, name);
  phonebook.AddNumber(number, mail, name) //Phone Number already exists
  ```

- **Get List of Phone Numbers** 
  ```javascript
  phonebook.GetAllNumbers();
  ```

- **Get Unique Details By Phone Number** 
  ```javascript
  phonebook.GetNumber('08168028900');
  ```