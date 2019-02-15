import axios from 'axios'

export default {

    getStorage: function () {
        return axios.get("/api/home/")
    },

    addStorage: function (location) {        
        return axios.post("/api/home/", location)
    },

    getQueue: function() {
        return axios.get("/api/queue")
    },

    addQueue: function(item) {
        return axios.post("/api/queue", item)
    },

    removeQueue: function(item){                
        return axios.delete(`/api/${item.route}/${item.id}/`)
    },
    removeItem: function(item){                
        return axios.patch(`/api/${item.route}/${item.location}`, item)
    },

    getItem: function() {
        return axios.get("/api/item")
    },
    addItem: function(item) {
        return axios.post("/api/item", item)
    },
    updateStorage: function(data) {        
        return axios.patch("/api/home/", data)
    },
    login: function(data) {
        return axios.post("/api/login",data)
    },
    signup: function(data) {
        console.log(data)
        return axios.post("/api/signup",data)
    }
}