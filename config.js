config = {

    // Cloud Foundry
    production: {
      url: 'https://' + JSON.parse(process.env.VCAP_APPLICATION)['application_uris'][0], 
      mail: {
          transport: 'SMTP',
          options: {
              host: process.env.MAIL_HOST,
              port: 587,
              auth: {
                  user: process.env.MAIL_USER,
                  pass: process.env.MAIL_PASSWORD
              }
          }
      },
      database: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        pool: {
          min: 2,
          max: 4
        },
        debug: false
      },
      server: {
        host: '0.0.0.0',
        port: process.env.PORT
      },
      logging: false
    },

};
module.exports = config;
