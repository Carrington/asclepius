FROM ubuntu:14.04

# Install.
RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential && \
  apt-get install -y software-properties-common && \
  apt-get install -y byobu curl git htop man unzip vim wget && \
  rm -rf /var/lib/apt/lists/*

# Add files.
ADD root/.bashrc /root/.bashrc
ADD root/.gitconfig /root/.gitconfig
ADD root/.scripts /root/.scripts

# Set environment variables.
ENV HOME /root

# Define working directory.
WORKDIR /root

# Define default command.
CMD ["bash"]

# Install Node.js and npm
RUN     aptitude install nodejs npm
#Install neo4j
RUN \
	wget -O - https://debian.neo4j.org/neotechnology.gpg.key | sudo apt-key add -
	echo 'deb http://debian.neo4j.org/repo stable/' >/tmp/neo4j.list
	sudo mv /tmp/neo4j.list /etc/apt/sources.list.d
	sudo apt-get update
RUN	aptitude install neo4j


# Install app dependencies
COPY package.json package.json
RUN npm install

# Bundle app source
COPY . /src

EXPOSE  8080

CMD ["node", "/src/index.js"]
