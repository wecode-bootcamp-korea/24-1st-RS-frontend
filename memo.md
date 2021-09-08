handleJoin = () => {
const { email, password, repassword, name, smscheck, emailcheck } =
this.state;

    fetch(``, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        repassword,
        name,
        smscheck,
        emailcheck,
      }),
    })
      .then(response => response.json())
      .then(response => {
        const alertMessages = {

        };

™
alert(alertMessages[response.MESSAGE]);
});
};
