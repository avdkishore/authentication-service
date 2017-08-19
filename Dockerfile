FROM node:8.1.0

ARG DOCKER_HOST
ARG PORT=3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json
COPY package.json yarn.lock /usr/src/app/

# Copy private key in circleci
copy id_rsa /root/.ssh/

# Install app dependencies
RUN \
  # set key permissions so ssh-agent will accept the key without an error
  chmod 600 /root/.ssh/id_rsa && \

  # add ssh key for git clone of private repos
  # indentation is needed so config param is assigned to "Host *"
  echo "    StrictHostKeyChecking no" >> /etc/ssh/ssh_config && \
  eval $(ssh-agent) && \
  ssh-add /root/.ssh/id_rsa && \

  # install dependencies including private dependencies
  yarn --production --silent && \

  # remove private key
  rm /root/.ssh/id_rsa

# Bundle app source
COPY . /usr/src/app

EXPOSE ${PORT}
CMD [ "yarn", "start" ]
