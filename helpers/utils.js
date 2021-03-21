const sgMail = require('@sendgrid/mail');
function CommunicationUtils() {
}

CommunicationUtils.sendEmail = function sendEmail(
    to,
    subject,
    message,
    from,
    fromName,
    attachmentData,
    template
) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to,
        from: {
            email: from,
            name: fromName,
        },
    };

    if (template && template.id) {
        msg.templateId = template.id;
        msg.dynamic_template_data = template.data;
    } else {
        msg.subject = subject;
        msg.html = message;
    }
    if (attachmentData) {
        msg.attachments = [
            {
                content: attachmentData.content,
                filename: attachmentData.fileName,
                type: attachmentData.type,
                disposition: 'attachment',
            },
        ];
    }

    sgMail
        .send(msg)
        .then(() => {
            return null;
        })
        .catch((error) => {
            sendEmail(
                to,
                subject,
                message,
                from,
                fromName,
                attachmentData,
                template
            );
        })
};

module.exports.CommunicationUtils = CommunicationUtils;