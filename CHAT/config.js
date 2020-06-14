'use strict'

var local      = "localhost",
    local_ip   = "127.0.0.1",
    local_port = 8000,
    peer_port  = 7000

var CONFIG = {
    SERVER : {
        PORT : local_port,
        DOMAIN : local,
        IP : local_ip,
        PEER_PORT : peer_port,
        PROTOCOL: function(){
            if( local_port == 443 ){
                return "https://"
            }
            return  "http://"
        }, 
        ASSET : () => {
            let port_url = ''
            let protocol = ''
            if( local_port == 443 ){
                protocol = "https://"
            }else{
                protocol = "http://"
                port_url = ':'+ local_port
            }

            return protocol + local + port_url;
        }
    }, 
    mailler: {
        email: "jbtruongthanhhung@gmail.com",
        password: "...."
    },
    database : {
        postgre : {
            type: 'postgres',
            username: 'postgres',
            password: 'admin123',
            database_name: 'SITTERS',
            host: local_ip,
            dialect: 'postgres',
            logging : false
        },
        mongodb : 'mongodb://127.0.0.1:27017/sitters'
    },
    TimeExpireAccessToken : 1 * 60,
    TimeExpireAccessChannel : 24 * 60 * 60,
    salt : 5,
    IS_ENVIROMENT_PRODUCT : true,
    WEBPUSH: { 
        PUBLIC_KEY: 'BIUnprvdEEntYAgrOBaI_MAaWK8qtRtgfM_RKnSGglsI1NAZUcycI7yJ6YL2ZEoqmKG9dSQ3AtX0-2mS6j_7epE',
        PRIVATE_KEY: 'OAGhOjAuZ5WqNOm7hdqNeo-SSJqGApaXivfY5ps0Eiw'
    },
    EVENT : {
        CONNECTTION     : 'connection',
        DISCONNECT      : 'disconnect',
        SEND_MESSAGE    : 'send-message',
        RESPONSE_MESSAGE: 'response-message',
        JOIN_CHANNEL    : "join-channel",
        SEND_TYPING     : "send-typing",
        RESPONSE_TYPING : 'response-typing'
    },
    CHANNEL: {
        SINGLE_PREFIX: "SINGLE",
        SINGLE_ADMIN_PREFIX: "ADMIN",
        ROLE_USER: {
            sitter  : 1,
            employer: 2,
            admin   : 3
        }
    }
}
module.exports = CONFIG;