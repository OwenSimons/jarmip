var apiClient = new Vue({
    el: "#jarm",
    data() {
        return {
            endpoint: "http://0.0.0.0:8080/api/",
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