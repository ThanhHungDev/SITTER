///connect database
'use strict'
/**
 * import
 */
var Sequelize = require("sequelize")
var CONFIG    = require('../config')
/**
 * variable
 */
var db = {}

var sequelize = new Sequelize(
    CONFIG.database.postgre.database_name, 
    CONFIG.database.postgre.username, 
    CONFIG.database.postgre.password, 
    {
        host: CONFIG.database.postgre.host, 
        dialect: CONFIG.database.postgre.dialect,
        logging:  CONFIG.database.postgre.logging
    }
)
// sequelize package
db.Sequelize = Sequelize;
// sequelize instance
db.sequelize = sequelize;
/**
 * tables
 */
db.USER         = require('./User.js')(sequelize, Sequelize)
db.TOKEN_REFESH = require("./TokenRefesh.js")(sequelize, Sequelize)
db.SCHEDULE     = require("./Schedule.js")(sequelize, Sequelize)
db.BOOKING      = require("./Booking.js")(sequelize, Sequelize)
db.DATE_BOOKING = require("./DateBooking.js")(sequelize, Sequelize)
db.ORDER        = require("./Order.js")(sequelize, Sequelize)
db.PAYMENT      = require("./Payment.js")(sequelize, Sequelize)

db.BOOKING.hasOne(db.DATE_BOOKING, {foreignKey: 'booking_id'})
db.BOOKING.belongsTo(db.USER, { as: 'sitter', foreignKey: 'sitter_id' });
db.BOOKING.belongsTo(db.USER, { as: 'employer', foreignKey: 'employer_id' });
db.DATE_BOOKING.belongsTo(db.BOOKING, {foreignKey: 'booking_id'})
module.exports = db