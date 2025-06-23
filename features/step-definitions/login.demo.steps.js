const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^User is on login page$/, async () => {
	await browser.url('https://the-internet.herokuapp.com/login')
});

// When(/^User enters username and password$/, async () => {
// 	await $('#username').setValue('tomsmith')
//     await $('#password').setValue('SuperSecretPassword!')
// });


When(/^User enters (.*) and (.*)$/, async (username, password) => {
	await $('#username').setValue(username)
    await $('#password').setValue(password)
});


When(/^Clicks on login button$/, async () => {
	await $('button[type="submit"]').click()
});

// Then(/^User is navigated to the home page$/, async () => {
//     await expect($('.subheader')).toHaveText('Welcome to the Secure Area. When you are done click logout below.')
// });

Then(/^This (.*) is displayed$/, async (message) => {
	await expect($('#flash')).toHaveText(expect.stringContaining(message))
});

