# Project Name - Backend

This is the backend section of the project.

## Installation

Navigate to the backend directory:

```bash
cd ./backend
```
Install dependencies:
``` npm install```

Initialize Sequelize:
```npx sequelize-cli init```


Ensure you have a PostgreSQL server running. Create a database and configure the necessary details in the Sequelize configuration files (config/config.json) according to your PostgreSQL setup.

Once configured, run migrations:
```npx sequelize-cli db:migrate```

To start the server in watch mode:
```npm run watch```

To start the server normally:
```node server.js```