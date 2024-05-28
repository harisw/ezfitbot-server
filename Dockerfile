FROM node:18
WORKDIR /ezfit-server
RUN rm -rf package.json
COPY package.json .
RUN npm install --global --force yarn
RUN yarn install
COPY . .
CMD npm run start