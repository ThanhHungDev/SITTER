var local      = "153.126.149.63",
    local_ip   = "153.126.149.63",
    local_port = 9999,
    peer_port  = 7000;

export default {
    SERVER: {
        PORT: local_port,
        DOMAIN: local,
        IP: local_ip,
        PEER_PORT: peer_port,
        PROTOCOL: function () {
            if (local_port == 443) {
                return "https://";
            }
            return "http://";
        },
        ASSET: () => {
            let port_url = "";
            let protocol = "";
            if (local_port == 443) {
                protocol = "https://";
            } else {
                protocol = "http://";
                port_url = ":" + local_port;
            }

            return protocol + local + port_url;
        },
    },
    SERVER_PHP: {
        URL: "http://babysitter.trust-growth.co.jp",
    },
};
