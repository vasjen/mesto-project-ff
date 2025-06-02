const config = {
    baseUrl: 'https://nomoreparties.co/v1/cohort-mag-4',
    headers: {
        authorization: 'ec42ca61-a775-4a5d-9e38-3f446ca73834',
        'Content-Type': 'application/json'
    }
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

function request(endpoint, options) {
    return fetch(`${config.baseUrl}${endpoint}`, {
        headers: config.headers,
        ...options
    }).then(checkResponse);
}

export { request, config }; 