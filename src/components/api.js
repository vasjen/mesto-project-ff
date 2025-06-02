import { request } from '../utils/api.js';

export const getInitialCards = () => {
    return request('/cards');
};

export const getUserData = () => {
    return request('/users/me');
};

export const updateUserData = (userName, userAvatar, userDescription) => {
    return request('/users/me', {
        method: 'PATCH',
        body: JSON.stringify({
            name: userName,
            about: userDescription,
            avatar: userAvatar
        })
    });
};

export const addNewCard = (cardName, cardLink) => {
    return request('/cards', {
        method: 'POST',
        body: JSON.stringify({
            name: cardName,
            link: cardLink
        })
    });
};

export const deleteMyCard = (cardId) => {
    return request(`/cards/${cardId}`, {
        method: 'DELETE'
    });
};

export const setLike = (cardId) => {
    return request(`/cards/likes/${cardId}`, {
        method: 'PUT'
    });
};

export const unSetLike = (cardId) => {
    return request(`/cards/likes/${cardId}`, {
        method: 'DELETE'
    });
};

export const updateProfileAvatar = (avatarLink) => {
    return request('/users/me/avatar', {
        method: 'PATCH',
        body: JSON.stringify({
            avatar: avatarLink
        })
    });
};

