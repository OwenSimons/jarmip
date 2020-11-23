var apiClient = new Vue({
    el: "#jarm",
    data() {
        return {
            endpoint: "http://127.0.0.1:5000/api/",
            ip: null,
            jarm: null,
        }
    },
    methods: {
        generateJarm: function () {
            axios
                .get(this.endpoint + this.ip)
                .then(response => (this.jarm = response.data.jarm))
            console.log(this.jarm)
        }
    }
})