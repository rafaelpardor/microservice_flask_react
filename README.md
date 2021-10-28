# Microservices with Flask, React and Docker

[![Build Status](https://app.travis-ci.com/rafaelpardor/testdriven-app.svg?branch=master)](https://app.travis-ci.com/rafaelpardor/testdriven-app)

## Commands to run application

```bash
docker-compose -f docker-compose.yaml up --build # Run the app
docker-compose -f docker-compose.yaml \
  run users python manage.py recreate_db # Run database
docker-compose -f docker-compose.yaml \
  run users python manage.py tests # Run tests
docker-compose -f docker-compose.yaml \
  run users python manage.py seed_db
docker-copmose -f docker-compose.yaml \
  run users flake8 project # Run linting
docker-compose -f docker-compose.yml \
  run users python manage.py cov # view code coverage

find . | grep -E "(__pycache__|\.pyc|\.pyo$)" | xargs rm -rf # clean
```

