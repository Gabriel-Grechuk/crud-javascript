#!/bin/sh
set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Instalando pacotes npm localmente.
npm install

# Subindo Postgres no docker.
docker-compose up -d
printf "Aguardando 5s até o host do postgres estar rodando...\n"
sleep 5

# Fazendo a migration do db e semeando dados com prisma.
npx prisma migrate dev --name init

# Parando execução do docker.
docker-compose stop postgres-db

printf "${GREEN}Configuração e seed do banco de dados completa.${NC} Rode ${BLUE}./run.sh${NC} para subir a aplicação.\n"
