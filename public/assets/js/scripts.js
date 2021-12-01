console.log('✔️ Tennant JS Script Loaded');


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

        fetch("http://localhost:3001/api/departments/", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result).id)
                let userMessage = "Department " + JSON.parse(result).name + " created."
                let userLink = "/departments/view/" + JSON.parse(result).id
                itemCreatedNotify(userMessage,userLink);
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