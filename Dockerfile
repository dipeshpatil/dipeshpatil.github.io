FROM node:16-alpine

RUN apk add --no-cache python3 py3-pip git make g++

WORKDIR /usr/src/app

ARG REACT_APP_GITHUB_TOKEN

RUN git clone https://github.com/dipeshpatil/dipeshpatil.github.io.git .

RUN npm i

ENV GITHUB_USERNAME="dipeshpatil"
ENV USE_GITHUB_DATA="true"
ENV REACT_APP_GITHUB_TOKEN=${REACT_APP_GITHUB_TOKEN}

EXPOSE 3000

CMD ["npm", "start"]
