const config = {
    baseUrl: 'https://nomoreparties.co/v1/cohort-mag-4',
    headers: {
        authorization: 'ec42ca61-a775-4a5d-9e38-3f446ca73834',
        'Content-Type': 'application/json'
    }
}

export const getInitialCards = async () => {
    try {
        const response = await fetch(`${config.baseUrl}/cards`, { headers: config.headers });
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const getUserData = async () => {
    try {
        const response = await fetch(`${config.baseUrl}/users/me`, { headers: config.headers });
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateUserData = async (userName, userAvatar, userDescription) => {
    try {
        const response = await fetch(`${config.baseUrl}/users/me`, { method: 'PATCH', headers: config.headers, body: JSON.stringify({ name: userName, about: userDescription, avatar: userAvatar }) });
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addNewCard = async (cardName, cardLink) => {
    try {
        const response = await fetch(`${config.baseUrl}/cards`, { method: 'POST', headers: config.headers, body: JSON.stringify({ name: cardName, link: cardLink }) });
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteMyCard = async (cardId) => {
    try {
        const response = await fetch(`${config.baseUrl}/cards/${cardId}`, { method: 'DELETE', headers: config.headers });
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const setLike = async (cardId) => {
    try {
        const response = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, { method: 'PUT', headers: config.headers });
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const unSetLike = async (cardId) => {
    try {
        const response = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, { method: 'DELETE', headers: config.headers });
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateProfileAvatar = async (avatarLink) => {
    try {
        const response = await fetch(`${config.baseUrl}/users/me/avatar`, { method: 'PATCH', headers: config.headers, body: JSON.stringify({ avatar: avatarLink }) });
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

