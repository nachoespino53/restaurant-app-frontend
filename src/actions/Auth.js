// An attempt to refactor code that is used on other components

fetchLogin = () => {
    fetch(`${backendAPI()}/api/v1/login`, {
        method: "POST",
        headers: {"Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({user: this.credentials()})
    }).then(res => res.json())
    .then(json => {
        if(json.jwt) {
            localStorage.setItem("token", json.jwt)
        }
    })
    .catch(error => console.error(error))
};

checkForToken = () => {
    let token = localStorage.getItem("token");
    if (token) {
        fetch(`${backendAPI()}/api/v1/profile`, {headers: {Authorization: `Bearer ${token}`}})
        .then(res => res.json())
        .then(console.log)
        .catch(error => console.error(error))
    }
}