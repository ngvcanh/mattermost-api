import endpoint from "./base";

// endpoint.user.login({
//     login_id: 'adasd',
//     password: '',
//     token: 'dasdasd--dasdasd-dada-dasdas-dasda-dasda--asdas-dasd'
// }).then(console.log);

endpoint.user.create({
    email: 'sfdsfsd',
    username: 'dsadas'
}, {t: 'dsdsd'}).then(console.log)

// endpoint.user.getById('fsfsdfdfsdf').then(console.log)