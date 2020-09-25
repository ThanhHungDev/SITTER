const node_validator = require('node-input-validator')

node_validator.extend('checkEqualKey', ({ value, args }, validator) => {
    if (value != process.env.KEY_SITTER_PHP) {
        return false
    }
    return true
});

var { Validator } = node_validator


module.exports.VALIDATE_HIDDEN_CHANNEL = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        key: "required|checkEqualKey"
    },{
        'key.required': "key is required",
        'key.checkEqualKey' : "key failure"
    });
     
    var matched = await validate.check()

    if (!matched) {
        req.error = validate.errors
    }
    next();
}