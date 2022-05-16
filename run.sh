#!/bin/sh
docker-compose up
npm start ; docker-compose stop postgres-db

