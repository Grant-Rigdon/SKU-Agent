import axios from 'axios'

export default {

    getStorage: function () {
        return axios.get("/api/home/")
    },

    addStorage: function (name) {
        console.log(name.name)
        return axios.post("/api/home/")
    }
}