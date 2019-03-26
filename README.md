# Drupsby

## Backend setup

Start drupal:

```bash
cd drupal
lando start && lando build.sh reset
lando drush uli
```

Log in and add couple of articles and pages

## Frontend setup

Given that you where in drupal directory:

```
cd ../frontend
npm install
npm run develop
```
