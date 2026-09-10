# Flask CRUD API with PostgreSQL and Docker

A simple CRUD REST API built using Flask, Flask-SQLAlchemy, PostgreSQL, and Docker.

## Technologies Used

* Python
* Flask
* Flask-SQLAlchemy
* PostgreSQL
* Docker
* Docker Compose
* Postman

## Features

* Create users
* Get all users
* Get user by ID
* Update users
* Delete users
* PostgreSQL database integration
* Docker containerization

## API Endpoints

| Method | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| GET    | `/test`       | Test the API   |
| POST   | `/users`      | Create a user  |
| GET    | `/users`      | Get all users  |
| GET    | `/users/<id>` | Get user by ID |
| PUT    | `/users/<id>` | Update a user  |
| DELETE | `/users/<id>` | Delete a user  |

## How to Run

Start the application using Docker Compose:

```bash
docker compose up --build
```

The API will be available at:

```text
http://localhost:4000
```

To stop the containers:

```bash
docker compose down
```

## Database

PostgreSQL runs in a Docker container and is connected to the Flask application using Docker Compose.

## Testing

The CRUD APIs were tested using Postman for creating, retrieving, updating, and deleting users.
