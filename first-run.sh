#!/bin/sh
set -e

docker-compose up -d
npx prisma migrate dev --name init

