FROM node:20.12.2

RUN apt-get update && apt-get install -y git

WORKDIR /app

RUN git clone https://github.com/Manav1011/GTU_INNOVATION_COUNCIL.git .

RUN node --version

RUN npm i