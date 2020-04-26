import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '166557c9-3bdb-4c27-88cc-fd541108a444'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(userID = 2 ) {
        return instance.delete(`follow/${userID}`).then(response => response.data)
    },
    follow(userID = 2 ) {
        return instance.post(`follow/${userID}`).then(response => response.data)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please prifileAPI object')
        return prifileAPI.getProfile(userId)
    }
    
}


export const prifileAPI = {
    getProfile(userId) {
        
        return instance.get(`profile/${userId}`).then( response => response.data)
        
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status}).then(response => response.data)
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}







