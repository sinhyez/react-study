FROM node:14

WORKDIR /app

COPY .env.development .env.production

COPY app/backend .

COPY scripts/backend /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]