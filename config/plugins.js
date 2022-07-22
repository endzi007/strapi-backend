module.exports = ({ env }) => ({
    // ...
    "io": {
        "enabled": true,
        "config": {
            "IOServerOptions": {
                "cors": { "origin": "http://localhost:3000", "methods": ["GET"] },
            },
            "contentTypes": "*",
            "events": [
                {
                    "name": "connection",
                    "handler": ({ strapi }, socket) => {

                        strapi.log.info(`[io] new connection with id ${socket.id}`);
                    },
                },
                {
                    "name": "create",
                    "handler": ({ strapi }, socket) => {
                        strapi.log.info(`something happened ${socket}`);
                    },
                }
            ],
            "eventsx.handler": (e) => {
                strapi.log.info(`something happened ${e}`)
            }
        },
    },
    // ...
});