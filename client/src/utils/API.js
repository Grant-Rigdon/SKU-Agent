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

    removeItem: function(item){                
        return axios.delete(`/api/${item.route}/${item.id}`)
    },

    getItem: function() {
        return axios.get("/api/item")
    },
    addItem: function(item) {
        return axios.post("/api/item", item)
    },
    updateStorage: function(data) {        
        return axios.patch("/api/home/", data)
    }
}