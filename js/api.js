var apiClient = new Vue({
    el: "#jarm",
    data() {
        return {
            endpoint: "https://jarmip-wqmjmf7yjq-nw.a.run.app/api/",
            ip: null,
            jarm: null,
            maliciousServers: [
                {name: "Trickbot", jarm: "22b22b09b22b22b22b22b22b22b22b352842cd5d6b0278445702035e06875c"},
                {name: "AsyncRAT", jarm: "1dd40d40d00040d1dc1dd40d1dd40d3df2d6a0c2caaa0dc59908f0d3602943"},
                {name: "Metasploit", jarm: "07d14d16d21d21d00042d43d000000aa99ce74e2c6d013c745aa52b5cc042d"},
                {name: "Cobalt Strike", jarm: "07d14d16d21d21d07c42d41d00041d24a458a375eef0c576d23a7bab9a9fb1"},
                {name: "Merlin C2", jarm: "29d21b20d29d29d21c41d21b21b41d494e0df9532e75299f15ba73156cee38"},
            ],
            matchedC2: null,
        }
    },
    methods: {
        generateJarm: function () {
            axios
                .get(this.endpoint + this.ip)
                .then(response => (this.jarm = response.data.jarm))
            //console.log(this.jarm)
            //console.log(this.maliciousServers)
            for (var i in this.maliciousServers) {
                if (this.maliciousServers[i].jarm === this.jarm) {
                    this.matchedC2 = this.maliciousServers[i].name;
                }
            }
        }
    }
})
