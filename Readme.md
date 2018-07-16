# Deploy Ghost on paas.anynines.com

## Note

Ghost is used in version 0.11.12 since PostgreSQL support has been dropped in later versions.

## Hot to cf push

Before exectuing the deployment commands below make sure:
- you are logged into a9s paas via CF CLI (`cf login`)
- you are targeting the right ort/space (`cf target`)

```
$ cf cs a9s-postgresql94 postgresql-single-small db
$ git clone git@github.com:anynines/ghost-on-a9s.git
$ cd ghost-on-a9s
$ git submodule init
$ git submodule update
$ cp Procfile Ghost/Procfile
$ cp config.js Ghost/config.js
$ cp -r theme Ghost/content/themes/
$ cd Ghost
$ npm install
$ grunt init
$ grunt prod
$ echo "node_modules" > .cfignore
$ cd ..
$ cf push ghost -p Ghost --random-route --no-start
$ cf set-env ghost MAIL_HOST '<your-smtp-server>'
$ cf set-env ghost MAIL_USER '<your-smtp-user>'
$ cf set-env ghost MAIL_PASSWORD '<your-smtp-password>'
$ cf bind-service ghost db
$ cf start ghost
```

That's it! Open the apps URL with a tailing "/admin" and configure the admin user.
