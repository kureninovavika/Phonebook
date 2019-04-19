let firstNameInput = document.getElementById('first-name');
let secondNameInput = document.getElementById('second-name');
let phoneInput = document.getElementById('phone');

let usersCollectionKey = 'usersList';


class UserInfo {
    constructor(firstName = '', secondName = '', phoneNumber) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.phoneNumber = phoneNumber
    }
}