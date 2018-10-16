# Mega Bites : Menu Component

> Component displaying meal image, information, description, and recommended wine pairings.

## Related Projects

  - https://github.com/HR-Mega-Bites/menu-service
  - https://github.com/HR-Mega-Bites/cutlery-service
  - https://github.com/HR-Mega-Bites/cooking-service
  - https://github.com/HR-Mega-Bites/review-service

## Table of Contents

1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Getting Started
1. npm start

2. Start up your postgreSQL server and create a 'menuservice' database
 ```
 psql postgres -U <YOUR USER OR POSTGRES>
 postgres=# CREATE DATABASE menuservice;
 ```
3. Change the user in the database/index.js file to be your db user.
4. set up the database with the schema
```
psql megabites < ./database/docker/schema.sql
```
5. seed the database
```
node database/seed.js
```
6. start up the server and bundle files
```
npm run build && start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

