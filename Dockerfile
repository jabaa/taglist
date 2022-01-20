FROM node:17.4.0-bullseye AS build

COPY client /client
COPY server /server

WORKDIR /client
RUN npm install && npm audit fix ; npm run build
WORKDIR /server
RUN npm install && npm audit fix ; npm run build

FROM node:17.4.0-bullseye

COPY --from=build /client/dist/taglist-client /client
COPY --from=build /server/dist /server/dist
COPY --from=build /server/package.json /server/package.json
COPY --from=build /server/package-lock.json /server/package-lock.json

WORKDIR /server
RUN npm install --production && npm audit fix

ENV CLIENT_PATH=/client

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]