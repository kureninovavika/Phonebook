/* Search (Filter) */

/* Var 1 */
function filterUsers() {
    document.querySelector('#search-input').oninput = function () {
        let inputValue = this.value.trim();
        let usersListRow = document.querySelectorAll('#users-list tbody tr');

        if(inputValue != '') {
            usersListRow.forEach(function (elem) {
                if(elem.innerText.search(inputValue) == -1) {
                    elem.style.display = "none";
                }
                else {
                    elem.style.display = "";
                }
            });
        }
        else {
            usersListRow.forEach(function (elem) {
                elem.style.display = "";
            });
        };
    };

};



/* Var 2 */

function setHandlerFilterInUsersTable() {
    let searchInput = document.querySelector('#search-input');
    let filter = searchInput.value.toUpperCase();
    let usersListRow = document.querySelectorAll('#users-list tbody tr');
    let resultValue;

    for (let i = 0; i < usersListRow.length; i++) {
        resultValue = usersListRow[i].textContent || usersListRow[i].innerText;
        if (resultValue.toUpperCase().indexOf(filter) > -1) {
            usersListRow[i].style.display = "";
        } else {
            usersListRow[i].style.display = "none";
        }
    }
};

/* End - Search (Filter) */