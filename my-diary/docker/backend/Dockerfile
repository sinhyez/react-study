FROM node:14

WORKDIR /app

COPY .env.production .env.production

COPY app/backend .

COPY scripts/backend /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]