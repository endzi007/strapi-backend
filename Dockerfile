FROM arm64v8/node:16

RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /
COPY ./package.json ./
COPY ./yarn.lock ./
ENV PATH /node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g 
RUN yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "start"]