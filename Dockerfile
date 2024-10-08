FROM node as build

WORKDIR /hawlt

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# nginx for production
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /hawlt/build /hawlt/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
