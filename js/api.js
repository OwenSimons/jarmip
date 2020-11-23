var apiClient = new Vue({
    el: "#jarm",
    data() {
        return {
            endpoint: "https://jarmip-wqmjmf7yjq-nw.a.run.app/api/",
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
