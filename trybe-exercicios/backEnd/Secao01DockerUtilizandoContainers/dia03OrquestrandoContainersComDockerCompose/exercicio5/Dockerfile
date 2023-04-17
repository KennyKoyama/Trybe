FROM node:alpine

WORKDIR /app

COPY ./test-app/ ./

RUN npm i

ENTRYPOINT [ "npm" ]

CMD [ "start" ]

EXPOSE 3000