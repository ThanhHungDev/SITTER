/**
 * define
 */
var express               = require('express')
var router                = express.Router()


var { refesh }                       = require("../controller/user"),
    { get_channel_message }          = require("../controller/channel"),
    { VALIDATE_REFESH }              = require("../middleware/request/refesh"),
    { VALIDATE_GET_CHANNEL_MESSAGE } = require("../middleware/request/get-channel-message")
    


router.post('/refesh', [ VALIDATE_REFESH ], refesh)
router.post('/channel-message', [VALIDATE_GET_CHANNEL_MESSAGE], get_channel_message )
module.exports = router;