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

1. Start up your postgreSQL server and create a 'menuservice' database by running the sql file.
```
psql < ./database/docker/schema.sql
```
2. Change the user in the database/index.js file to be your db user.
4. seed the database
```
node database/seed.js
```
5. start up the server and bundle files
```
npm run build && npm start
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

