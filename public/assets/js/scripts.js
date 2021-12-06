console.log('✔️ Tennant JS Script Loaded');

function createTimecard() {
    let title = document.getElementById("title").value;
    let individual = document.getElementById("individual").value;
    let hours = document.getElementById("hours").value;
    let notes = document.getElementById("notes").value;
    let cardDate = document.getElementById("date").value;
    /*theData = {title, individual, hours, notes}
    console.log(theData);*/

    if (title.length == 0 || title.length > 255) {
        itemErrorNotify("Title cannot be left blank, or is too long.")
        cancelEditModal();
    }
    else if (hours.length == 0 || hours.length > 255) {
        itemErrorNotify("Hours must have a value.")
        cancelEditModal();
    }
    else if (cardDate == '') {
        itemErrorNotify("Date must be set")
        cancelEditModal();
    } else {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": title,
            "hours": hours,
            "notes": notes,
            "individual_id": individual,
            "date": cardDate
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/timecards", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result))
                let userMessage = "Timecard # " + JSON.parse(result).id + " created."
                //let userMessage = "Individual created."
                let userLink = "/timecards/view/" + JSON.parse(result).id
                itemCreatedNotify(userMessage, userLink);
            })
            .catch(error => console.log('error', error));
    }
}

function createIndividual() {
    //person data
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let nname = document.getElementById("nname").value;
    let startdate = document.getElementById("startdate").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let usernotes = document.getElementById("usernotes").value;
    //user acct data
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let disabled = false;
    let lastlogin = null;

    /*theData = {fname, lname, nname, startdate, email, department, usernotes, username, password, disabled, lastlogin}
    console.log(theData);*/

    if (fname.length == 0 || fname.length > 255)
        itemErrorNotify("First Name cannot be left blank, or is too long.")
    else if (lname.length == 0 || lname.length > 255)
        itemErrorNotify("Last Name cannot be left blank, or is too long.")
    else if (startdate.length == 0)
        itemErrorNotify("Start date must be set")
    else if (email.length == 0 || email.length > 255)
        itemErrorNotify("Email must be populated, or is too long.")
    else if (department.length == 0)
        itemErrorNotify("Department cannot be left blank")
    else if (username.length == 0 || username.length > 255)
        itemErrorNotify("Username cannot be left blank, or is too long.")
    else if (password.length == 0 || password.length > 255)
        itemErrorNotify("Password cannot be left blank, or is too long.")
    else if (password.length < 8)
        itemErrorNotify("Password must be 8 characters minimum")
    else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "first_name": fname,
            "last_name": lname,
            "nickname": nname,
            "start_date": startdate,
            "department_id": department,
            "email": email,
            "last_modified": "2021-12-01T02:21:42.732",
            "username": username,
            "password": password,
            "disabled": disabled,
            "last_login": lastlogin,
            "notes": usernotes
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/individuals/", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result))
                let userMessage = "Individual " + JSON.parse(result).first_name + " " + JSON.parse(result).last_name + " created."
                //let userMessage = "Individual created."
                let userLink = "/people/view/" + JSON.parse(result).id
                itemCreatedNotify(userMessage, userLink);
            })
            .catch(error => console.log('error', error));
    }
}

function testTimecardData() {
    document.getElementById("title").value = "Planning for holiday party";
    document.getElementById("hours").value = 10;
    document.getElementById("individual").value = 1;
    document.getElementById("notes").value = "Some fun notes";
}

function testIndvData() {
    // This is for testing, and can be removed for prod
    document.getElementById("fname").value = "David";
    document.getElementById("lname").value = "Clark";
    document.getElementById("nname").value = "ClarkyBoy";
    document.getElementById("startdate").value = "2020-03-20"
    document.getElementById("email").value = "email@address.me";
    document.getElementById("department").value = 1;
    document.getElementById("usernotes").value = "A collection of notes about a user. Words words.";
    document.getElementById("username").value = "hellokitty" + 19 + Math.floor(Math.random() * 130);
    document.getElementById("password").value = 'g!G' + Math.floor(Math.random() * 999 * 200);
}

function createDepartment() {
    let deptNameInput = document.getElementById("dname").value;
    if (deptNameInput.length == 0)
        itemErrorNotify("Department name cannot be blank")
    else if (deptNameInput.length > 255)
        itemErrorNotify("Department name too long (255 Character Limit)")
    else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": deptNameInput,
            "deleted": false
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/departments/", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result).id)
                let userMessage = "Department " + JSON.parse(result).name + " created."
                let userLink = "/departments/view/" + JSON.parse(result).id
                itemCreatedNotify(userMessage, userLink);
                document.getElementById("dname").value = null;
            })
            .catch(error => console.log('error', error));
    }
}

function itemErrorNotify(message) {
    const errorDiv = document.getElementById("errDiv");
    const errorMsg = document.getElementById("errorText");
    const informDiv = document.getElementById("informDiv");
    informDiv.style.display = 'none';
    errorDiv.style.display = 'block';
    errorMsg.textContent = message;
}

function itemCreatedNotify(message, link) {
    const errorDiv = document.getElementById("errDiv");
    const informMsg = document.getElementById("informText");
    const informLink = document.getElementById("informLink");
    errorDiv.style.display = 'none';
    informDiv.style.display = 'block';
    informMsg.textContent = message;
    informLink.href = link;
}

function editModalConfirm() {
    editModalOpen = true;
    let element = document.getElementById("editConfirmModal");
    element.classList.add("is-active");
}

function updateIndividual() {

    //person data
    let userid = document.getElementById("userid").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let nname = document.getElementById("nname").value;
    let startdate = document.getElementById("startdate").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let usernotes = document.getElementById("usernotes").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let disabled = document.getElementById("disabled").value;
    //let lastlogin = null;

    if (fname.length == 0 || fname.length > 255) {
        itemErrorNotify("First Name cannot be left blank, or is too long.")
        cancelEditModal();
    }
    else if (lname.length == 0 || lname.length > 255) {
        itemErrorNotify("Last Name cannot be left blank, or is too long.")
        cancelEditModal();
    }
    else if (startdate.length == 0) {
        itemErrorNotify("Start date must be set")
        cancelEditModal();
    }
    else if (email.length == 0 || email.length > 255) {
        itemErrorNotify("Email must be populated, or is too long.")
        cancelEditModal();
    }
    /*else if (department.length == 0) {
        itemErrorNotify("Department cannot be left blank")
        cancelEditModal(); }*/
    else if (username.length == 0 || username.length > 255) {
        itemErrorNotify("Username cannot be left blank, or is too long.")
        cancelEditModal();
    }
    else if (password.length == 0 || password.length > 255) {
        itemErrorNotify("Password cannot be left blank, or is too long.")
        cancelEditModal();
    }
    else if (password.length < 8) {
        itemErrorNotify("Password must be 8 characters minimum");
        cancelEditModal();
    }
    else {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "first_name": fname,
            "last_name": lname,
            "nickname": nname,
            "start_date": startdate,
            "email": email,
            "username": username,
            "password": password,
            "notes": usernotes,
            "disabled": disabled
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/individuals/" + userid, requestOptions)
            .then(response => {
                response.text();
                let userMessage = "Person updated sucessfully!"
                //let userMessage = "Individual created."
                let userLink = "/people/view/" + userid
                itemCreatedNotify(userMessage, userLink);
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        cancelEditModal();
    }
}

function cancelEditModal() {
    let element = document.getElementById("editConfirmModal");
    element.classList.remove("is-active");
}


function updateTimecard() {
    let timecardId = document.getElementById("timecardId").value;
    let title = document.getElementById("title").value;
    let individual = document.getElementById("individual").value;
    let hours = document.getElementById("hours").value;
    let notes = document.getElementById("notes").value;
    let cardDate = document.getElementById("date").value;

    if (title.length == 0 || title.length > 255) {
        itemErrorNotify("Title cannot be left blank, or is too long.")
        cancelEditModal();
    }
    else if (hours.length == 0 || hours.length > 255) {
        itemErrorNotify("Hours must have a value.")
        cancelEditModal();
    }
    else if (cardDate == '') {
        itemErrorNotify("Date must be set")
        cancelEditModal();
    } else {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": title,
            "hours": hours,
            "notes": notes,
            "date": cardDate,
            "deleted": '1'
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/timecards/" + timecardId, requestOptions)
            .then(response => {
                response.text();
                let userMessage = "Timecard updated sucessfully!"
                //let userMessage = "Individual created."
                let userLink = "/timecards/view/" + timecardId
                itemCreatedNotify(userMessage, userLink);
            })
            .then(result => console.log(result))
            .catch(error => {
                itemErrorNotify(error);
                console.log('error', error)
            });
    }
    cancelEditModal();
}

function updateDepartment() {
    let deptId = document.getElementById("deptId").value;
    let deptNameInput = document.getElementById("dname").value;
    let deleted = document.getElementById("deleted").value;
    if (deptNameInput.length == 0) {
        itemErrorNotify("Department name cannot be blank")
        cancelEditModal();
    }
    else if (deptNameInput.length > 255) {
        itemErrorNotify("Department name too long (255 Character Limit)")
        cancelEditModal();
    }
    else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": deptNameInput,
            "deleted": deleted,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/departments/" + deptId, requestOptions)
            .then(response => {
                response.text()
                let userMessage = "Department updated sucessfully!"
                //let userMessage = "Individual created."
                let userLink = "/departments/view/" + deptId
                itemCreatedNotify(userMessage, userLink);
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    cancelEditModal();
}