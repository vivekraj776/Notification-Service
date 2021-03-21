const dummyData = require('../dummyUser');
const  { CommunicationUtils } = require('../helpers/utils');

exports.welcomeEmail = async (req, res) => {
   try {
    let data = dummyData.users[0];
    let templateId = process.env.SENDGRID_TEMPLATE_ID;
    if(data.new_user){
        CommunicationUtils.sendEmail(
            data.email_address,
            "Welcome Email",
            "Welcome to Stack Finance",
            process.env.COMPANY_EMAIL_ADDRESS,
            "Rohit",
            null,
            templateId
        );
    }
   } catch (error) {
       res.status(400).send(error);
   }
}