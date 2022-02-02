const { PinpointClient } = require('@aws-sdk/client-pinpoint')

const REGION = "us-east-1";

const pinClient = new PinpointClient({region: REGION});

const { Pinpoint } = require('aws-sdk')
const pin = new Pinpoint()

module.exports = pinClient
