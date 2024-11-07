FROM node:20
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
RUN yarn add nodemon --dev
COPY . .
COPY nodemon.json .
EXPOSE 4000
CMD ["nodemon"]
