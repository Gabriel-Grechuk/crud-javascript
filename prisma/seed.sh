#!/bin/sh
set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Baixando arquivos com registro de usuários para subir no servidor.
printf "${GREEN}Baixando registro de usuários...${NC}\n"
# Subi no transfer.sh, já que o no google drive não da pra baixar com o curl.
curl https://transfer.sh/xyLgmo/users.csv.tgz -o users.csv.tgz
printf "${GREEN}Extraindo arquivo...${NC}\n"
tar -xf users.csv.tgz
printf "${GREEN}Removendo cabeçalho do CSV...${NC}\n"
sed -i '1d' users.csv 

printf "${GREEN}Importando dados com psql...${NC}\n"
printf "${BLUE}  >Isso provavelmente vai demorar vários minutos\n"
printf "  >Por favor, aguarde a conclusão do processo.${NC}\n"
printf "${RED}!!! ENTRAR SENHA PARA O POSTGRES:${NC} 123123\n"
psql -h localhost -d cadastro -U postgres -c "\copy usuarios(id, name, email, phone) FROM './users.csv' DELIMITER ',' CSV HEADER;"

printf "${GREEN}Limpando arquivos desnecessários...${NC}\n"
rm -f users.csv.tgz users.csv
printf "${GREEN}Pronto!${NC}\n"

