/**
 * define
 */
var express               = require('express')
var router                = express.Router()


var { refesh }                                         = require("../controller/user"),
    { channels, findOneOrCreateChannel, information_friends,
        createPaymentIntent } = require("../controller/channel"),
    { removeAllTokenAccess }                           = require("../controller/token-access"),
    { removeAllMessage }                               = require("../controller/message"),
    { removeAllTokenAccess }                           = require("../controller/token-access"),
    { removeAllMessage }                               = require("../controller/message"),

    { VALIDATE_REFESH }              = require("../middleware/request/refesh"),
    { VALIDATE_GET_CHANNEL_MESSAGE } = require("../middleware/request/get-channel-message"),
    { VALIDATE_CREATE_CHANNEL }      = require("../middleware/request/find-or-create-channel")
    


router.post('/refesh', [ VALIDATE_REFESH ], refesh)
router.post('/channels', [ VALIDATE_GET_CHANNEL_MESSAGE ], channels )
router.post('/channel', [ VALIDATE_CREATE_CHANNEL ], findOneOrCreateChannel )
router.get('/:id/friends', information_friends )
router.get('/remove-token', removeAllTokenAccess )
router.get('/remove-message', removeAllMessage )
router.get('/create-payment-intent', createPaymentIntent )
// router.prefix('/admin', async function (routerAdmin) {
//     routerAdmin.get('/test', ( req, res ) => {
//         res.status(201).send('Hello this is my personal details')
//     })
// })
router.use("/admin", require('./admin'))

module.exports = router