FROM node:14

WORKDIR /app

COPY ./app/frontend .

COPY ./scripts/frontend /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]
