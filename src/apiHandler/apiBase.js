const baseUrl = "http://localhost:5000/api/members"

function getRequest(url) {
    return new Promise((reslove, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(resJson => reslove(resJson));
    })
}

function postRequest(url, data) {
    return new Promise((reslove, reject) => {
        fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(resJson => reslove(resJson));
    });
}


export function getUsersDetails() {
    const url = baseUrl;
    return new Promise((reslove, reject) => {

    });
}

export function addUser(data) {
    const url = baseUrl + "/addUser";
    return new Promise((reslove, reject) => {
        postRequest(url, data)
            .then(resJson => reslove(resJson))
            .catch(err => reject(err));
    });
}