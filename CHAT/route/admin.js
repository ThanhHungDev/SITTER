/**
 * define
 */
var express               = require('express')
var router                = express.Router()


var { informationChannels, 
    adminToggleChannel, 
    adminUpdateChannel,
    readMessageChat,
    adminReadingChannel,
    adminGetUnreadMessage }    = require("../controller/channel")

//     { VALIDATE_REFESH }              = require("../middleware/request/refesh"),
//     { VALIDATE_GET_CHANNEL_MESSAGE } = require("../middleware/request/get-channel-message"),
//     { VALIDATE_CREATE_CHANNEL }      = require("../middleware/request/find-or-create-channel")

router.get('/information-channels', informationChannels )
router.get('/read-message', readMessageChat )
router.put('/toggle-channel', adminToggleChannel )
router.get('/update-channel', adminUpdateChannel )
router.put('/reading', adminReadingChannel )
router.get('/unread', adminGetUnreadMessage )


module.exports = router