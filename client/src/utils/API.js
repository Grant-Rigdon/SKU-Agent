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

    removeQueue: function(){
        return axios.delete("/api/queue/:id")
    },

    getItem: function() {
        return axios.get("/api/item")
    },
    addItem: function(item) {
        return axios.post("/api/item", item)
    },
    updateStorage: function(data) {
        console.log(data)
        return axios.patch("/api/home/", data)
    }
}