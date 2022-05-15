#!/bin/sh
set -e

npm install
docker-compose up -d
printf "Aguardando 5s até o host do postgres estar configurado...\n"
sleep 5
npx prisma migrate dev --name init

printf "Servidor rodando! verificar localhost:8080\n"

