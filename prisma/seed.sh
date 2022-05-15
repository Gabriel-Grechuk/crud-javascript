#!/bin/sh
set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Baixando arquivos com registro de usuários para subir no servidor.
echo "${GREEN}Baixando registro de usuários...${NC}"
# Subi no transfer.sh, já que o no google drive não da pra baixar com o curl.
curl https://transfer.sh/xyLgmo/users.csv.tgz -o users.csv.tgz
echo "${GREEN}Extraindo arquivo...${NC}"
tar -xf users.csv.tgz
echo "${GREEN}Removendo cabeçalho do CSV...${NC}"
sed -i '1d' users.csv 

echo "${GREEN}Importando dados com psql...${NC}"
echo "${BLUE}  Isso provavelmente vai demorar vários minutos"
echo "  Por favor, aguarde a conclusão do processo.${NC}"
echo "${RED}!!! ENTRAR SENHA PARA O POSTGRES:${NC} ${BLUE}123123${NC}"
psql -h localhost -d cadastro -U postgres -c "\copy usuarios(id, name, email, phone) FROM './users.csv' DELIMITER ',' CSV HEADER;"

echo "${GREEN}Limpando arquivos desnecessários...${NC}"
rm -f users.csv.tgz users.csv
echo "${GREEN}Pronto!${NC}"

