const node_validator = require('node-input-validator')

var { Validator } = node_validator


module.exports.VALIDATE_CREATE_CHANNEL = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        
        localUserId        : "required",
        referenceUserId    : "required",
        refesh             : "required",
        browser            : "required",
        browserMajorVersion: "required",
        browserVersion     : "required",
        os                 : "required",
        osVersion          : "required"
    },{
        'localUserId.required'        : "userId is required",
        'referenceUserId.required'    : "userId is required",
        'access.required'             : "Access is valid",
        'password.required'           : "Password is required",
        'browser.required'            : "Detect format valid",
        'browserMajorVersion.required': "Detect format valid",
        'browserVersion.required'     : "Detect format valid",
        'os.required'                 : "Detect format valid",
        'osVersion.required'          : "Detect format valid"
    });
     
    var matched = await validate.check()
    if (!matched) {
        req.error = validate.errors
    }
    next();
}