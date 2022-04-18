FROM node:16.14.2
ADD . /app
WORKDIR /app
COPY default.env ./.env
RUN npm install
ENTRYPOINT [ "npm", "run" ]
CMD ["test"]