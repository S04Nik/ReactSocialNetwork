import * as axios from 'axios'

const instance=axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{"API-KEY":"d609fda9-9af1-4843-b06b-5e3a94dc326a"}
});

export const usersAPI={
    getUsers(currentPage=1,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{})
    },
    postFollowers(id){
        return instance.post(`follow/${id}`,{})
    },
    deleteFollowers(id){
        return instance.delete(`follow/${id}`)
    }
}

export const getAuth=()=>{
    return instance.get(`auth/me`,{})
}

export const profileAPI={
    getUserById(userId){
        return instance.get(`profile/`+userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status})
    }
}