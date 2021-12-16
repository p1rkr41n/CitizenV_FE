import request from '@/util/request'
import colors from 'vuetify/es5/util/colors'
import { consoleError } from 'vuetify/es5/util/console'

const randomColor = () => {
    const temp = Object.keys(colors)
    const key = temp[Math.floor(Math.random() * temp.length)]
    const color = colors[key].base
    return color
}

const state = {
    access_token: null,
    expires_in: 3600,
    token_type: 'bearer',
    username: 'admin',
    avatar: null,
    userColor: '#2196f3',
    status: 'online',
}
const getters = {
    getAccessToken: (state) => {
        return state.access_token
    },
    getAvatar: (state) => state.avatar,

    getUsername: (state) => state.username,
    getUserStatus: (state) => state.status,
}
const actions = {
 
    demoLogin({ commit }, { id, password }) {
        return new Promise((resolve, reject) => {
            if (id === '99999999' && password === '123456') {
                commit('SET_LOGIN', { access_token: 'demo', expires_in: 0 })
                return resolve({ message: 'success' })
            } else {
                return reject({ message: 'Auth Failed' })
            }
        })
    },
    
    login({ commit, dispatch }, { id, password }) {
        // var id ;
        // id = this.id;
        // var password;
        // password = this.password
        // chuoi = '{ '+'"'+ 'id' +'"' +':'  + '"' + id + '"' + ', "password ": ' + '"'+ password +'"'+ '}';
        // console.log(chuoi)
        var obj = { id , password}
 
       var text = JSON.stringify(obj);
        
       console.log(text);

        return request({
            url: '/auth',
            method: 'post',
            data: text, 
        }).then((resp) => {
            commit('SET_LOGIN', resp)
            dispatch('fetchProfile')
        })
    },
    register({ commit, dispatch }, data) {
        return request({
            url: '/auth/register',
            method: 'post',
            data: data,
        }).then((resp) => {
            commit('SET_LOGIN', resp)
            dispatch('fetchProfile')
            return resp
        })
    },
    logout({ commit, dispatch }) {
        dispatch('closeSocket')
        commit('SET_ACCESS_TOKEN', null)
    },
    // get current login user info

    fetchProfile({ commit, dispatch, rootState }) {
        return request({
            url: '/',
            method: 'get',
        }).then((resp) => {
            commit('SET_LOGIN_PROFILE', resp.data)
            return resp
        })
    },
}

const mutations = {
    SET_LOGIN(state, { access_token, expires_in }) {
        state.access_token = access_token
        state.expires_in = expires_in
    },
    SET_ACCESS_TOKEN(state, token) {
        state.access_token = token
    },
    SET_LOGIN_PROFILE(state, payload) {
        state.id = payload.username
        state.avatar = payload.avatar
        state.color = randomColor()
    },
    UPDATE_SELF_STATUS(state, status) {
        state.status = status
    },
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations,
}