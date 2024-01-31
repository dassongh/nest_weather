## Nest.js weather app

### Overview

A simple Nest.js application that fetches data from OpenWeather API and saves it to db.

### Technologies and tools

- TypeScript - main programming language
- Node.js - runtime for application
- Nest.js - backend framework
- PostgreSQl - main database
- TypeORM - ORM
- Jest - testing library
- Docker/Docker-compose - containerization tools

### Prerequisites

1. You should have .env file in project directory in order to run project
2. You should have .env.test file in project directory in order to run e2e tests

**.env file example**

```env
POSTGRES_HOST="main_postgres"
POSTGRES_PORT=5432
POSTGRES_DB="postgres"
POSTGRES_USER="root"
POSTGRES_PASSWORD="superpassword"

OPEN_WEATHER_BASE_URL="https://api.openweathermap.org/data/3.0/onecall"
OPEN_WEATHER_API_KEY="YOUR_API_KEY"
```

**.env.test file example**

```env
POSTGRES_HOST="test_postgres"
POSTGRES_PORT=5433
POSTGRES_DB="postgres"
POSTGRES_USER="root"
POSTGRES_PASSWORD="superpassword"

OPEN_WEATHER_BASE_URL="https://api.openweathermap.org/data/3.0/onecall"
OPEN_WEATHER_API_KEY="YOUR_API_KEY"
```

### Steps to run the project

- Clone the repo
- `cd` into project directory
- run `docker compose up`
- app is running on port 3000

### Steps to run tests

- run `npm i` in project directory
- `npm run test:e2e` - to run e2e tests
- `npm run test` - to run unit tests
