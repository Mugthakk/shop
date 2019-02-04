import axios from 'axios';
import {
    ITEM_LIST_URL,
    CATEGORY_LIST_URL,
    LOGIN_URL,
    REVIEWS_URL,
    ORDERS_URL
} from "./urls";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const getRequest = (url, get_params = {} ) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: get_params }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
};

export const postRequest = (url, data, params = {} ) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
};

export const getItems = () => {
    return getRequest(ITEM_LIST_URL);
};

export const getCategories = () => {
    return getRequest(CATEGORY_LIST_URL);
}

export const getItem = (id) => {
    return getRequest(`${ITEM_LIST_URL}${id}`);
}

export const postLogin = (username, password) => {
    var data = {"username": username, "password": password};
    return postRequest(LOGIN_URL, data);
}

export const getItemReviews = (id) => {
    var params = {"item_id": id};
    return getRequest(REVIEWS_URL, params);
}

export const getUserReviews = () => {
    var params = {"from_user": true};
    return getRequest(REVIEWS_URL, params);
}

export const getUserOrders = () => {
    var params = {"from_user": true};
    return getRequest(ORDERS_URL, params);
}
