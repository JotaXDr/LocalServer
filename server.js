const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/enviar-email', (req, res) => {
  const { email, mensagem } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: true,
    auth: {
      user: 'BotRecebidor@outlook.com',
      pass: 'aq1sw2de3@fr4'
    }
  });

  const mailOptions = {
    from: email,
    to: 'BotRecebidor@outlook.com',
    subject: "aq1sw2de3@fr4",
    text: `Email: ${email}\nMensagem: ${mensagem}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao enviar o email');
    } else {
      console.log(`Email enviado: ${info.response}`);
      res.send('Email enviado com sucesso');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
