import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3,
    repeat: {
      every: 1,
      limit: 100
    },
    lifo: true
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'noreply <contato@forhands.net>',
      to: `${user.name} <${user.email}>`,
      subject: 'User registration',
      html: `Hey, ${user.name}, welcome to my test.`
    });
  },
};