const { CommunicationUtils } = require('../helpers/utils.js');
const sinon = require('sinon');


describe('proposal', () => {
    const stubOnce = sinon.stub;
    before('mock utils', () => {
        CommunicationUtils.sendEmail = function sendEmail(to, subject, message, from, fromName, configs, attachmentData, template){
            return null;
        };
        stubOnce(CommunicationUtils, 'sendEmail');
      });
});