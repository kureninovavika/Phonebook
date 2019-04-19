/* Create Users Table */

if (JSON.parse(localStorage.getItem(usersCollectionKey)) !== undefined){
    usersArr = JSON.parse(localStorage.getItem(usersCollectionKey));
    renderNewUserRow();
};

function clearInputValue() {
    firstNameInput.value = '';
    secondNameInput.value = '';
    phoneInput.value = '';
};

function createNewUser() {
    let firstName = firstNameInput.value;
    let secondName = secondNameInput.value;
    let phoneNumber = phoneInput.value;
    let newUserInfo = new UserInfo (firstName, secondName, phoneNumber);
    setNewUserToStorage(newUserInfo);
    renderNewUserRow();
    clearInputValue();
};

function setNewUserToStorage(newObj) {
    if (JSON.parse(localStorage.getItem(usersCollectionKey)) == undefined) {
        let newUsersArr = [];
        localStorage.setItem(usersCollectionKey, JSON.stringify(newUsersArr));
    }
    let usersArr = JSON.parse(localStorage.getItem(usersCollectionKey));
    usersArr.push(newObj);
    localStorage.setItem(usersCollectionKey, JSON.stringify(usersArr));
};

function renderNewUserRow() {
    let userInfoRow = '';
    let userInfoForRender = JSON.parse(localStorage.getItem(usersCollectionKey));
    for (let key in userInfoForRender) {
        userInfoRow += '<tr id="user-row-' + key + '"><td>' + key + '</td><td>' + userInfoForRender[key].firstName + '</td><td>' + userInfoForRender[key].secondName + '</td><td>' + userInfoForRender[key].phoneNumber + '</td></tr>';
    }
    document.querySelector('tbody').innerHTML = userInfoRow;
};