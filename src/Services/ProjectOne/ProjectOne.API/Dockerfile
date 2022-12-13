FROM node:14-alpine3.15 AS node
WORKDIR /src/Services/ProjectOne/ProjectOne.API
COPY package.json /src/Services/ProjectOne/ProjectOne.API
RUN npm i
COPY . /src/Services/ProjectOne/ProjectOne.API
CMD ["node","server.js"]
