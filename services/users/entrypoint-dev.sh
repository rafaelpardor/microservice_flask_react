#!/bin/bash
echo "Wating for postgres..."
while ! nc -z users_db 5432; do
  echo "Reaching to database..."
  sleep 0.5
done
echo "Connected to database."

python manage.py run -h 0.0.0.0
