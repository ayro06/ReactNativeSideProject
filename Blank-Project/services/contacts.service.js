const server = 'http://localhost:62391/MyWebService.asmx/';

export function getContactsFromApiAsync() {
    return fetch(server + 'GetPeople') //fetch the URL i.e. sends a request to the server & returns it
        .then(response => response.json()) //when the response comes back as an HTML file, extract only the JSON out of the <body> using the "response.json()" method that's being called
        .catch(error => console.error(error)); // if there's an error when the response is sent back for whatever reason, console log it
}

export function updateContactFromApiAsync(id, name, phone, street, city, state, zip, country) {
    //this fetch has 2 args (1st arg is the URL, 2nd arg is an object "{}")
    return fetch(server + 'UpdatePerson', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${id}&name=${name}&phone=${phone}&street=${street}&city=${city}&state=${state}&zip=${zip}&country=${country}` //"&" is a query string parameter syntax in URLs
    })
        .catch(error => console.error(error));
}

export function addContactFromApiAsync(name, phone, street, city, state, zip, country) {
    //this fetch has 2 args (1st arg is the URL, 2nd arg is an object "{}")
    return fetch(server + 'AddPerson', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `name=${name}&phone=${phone}&street=${street}&city=${city}&state=${state}&zip=${zip}&country=${country}` //"&" is a query string parameter syntax in URLs
    })
        .catch(error => console.error(error));
}

export function deleteContactFromApiAsync(id) {
    return fetch(server + 'DeletePerson', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${id}` //"&" is a query string parameter syntax in URLs
    })
        .catch(error => console.error(error));
}