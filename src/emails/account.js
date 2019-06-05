const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'allen.bradley111@gmail.com',
        subject: 'Welcome to Task App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'allen.bradley111@gmail.com',
        subject: 'Bye!',
        text: `Hey ${name}! Sorry to see you go. Is there anything we could do better?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}