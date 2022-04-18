FROM node:16.14.2
ADD . /app
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm", "run" ]

# # The main purpose of a CMD is to provide default commands to an executing container
CMD ["test"]
# FROM alpine

# LABEL maintainer="madhank93"

# RUN apk --no-cache add \
#     build-base\
#     python3\
#     nodejs \
#     npm \
#     ffmpeg \
#     && npm install -g \
#     npm@6.14.9 \
#     # Clean up obsolete files:
#     && rm -rf \
#     /tmp/* \
#     /root/.npm

# WORKDIR /usr/lib/wdio

# COPY package.json /usr/lib/wdio

# COPY package-lock.json /usr/lib/wdio

# RUN npm install \
#     # Clean up obsolete files:
#     && rm -rf \
#     /tmp/* \
#     /root/.npm

# COPY . /usr/lib/wdio

# ENTRYPOINT [ "npm", "run" ]

# CMD ["test"]