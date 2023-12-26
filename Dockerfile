FROM node:20

RUN sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

WORKDIR /app

# Copy the source code
COPY . .
RUN npm install
RUN npx azle azle_hello_world
#RUN dfx start --background && sleep 10
#RUN dfx canister create azle_hello_world
#RUN dfx build

#CMD [ "./node_modules/.bin/ts-node", "src/test.ts" ]
CMD [ "/bin/bash" ]
