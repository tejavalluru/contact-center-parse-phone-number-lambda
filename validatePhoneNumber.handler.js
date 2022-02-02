const pinClient = require('./pinClient')
const { PhoneNumberValidateCommand } = require('@aws-sdk/client-pinpoint')
const { Pinpoint } = require('aws-sdk')
const pin = new Pinpoint()
const AWS = require('aws-sdk')
AWS.config.update({region:'us-east-1'})
async function validatePhoneNumber(event, callback) {
    try {
        let params = {
            NumberValidateRequest: {
               PhoneNumber: event.Details.Parameters.PhoneNumber
            }
        }
        
        let getResult = await pinClient.send(new PhoneNumberValidateCommand(params))
        console.log("RESULT>>>", getResult)
        return getResult
    } catch(err){
    console.log("ERR",err)
        return {
        statusCode: 404,
        message: "Invalid Phone Number"
        }
    }
}

module.exports = validatePhoneNumber
