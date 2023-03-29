# About The Project

<h2 align="center">
 <a href="https://talent-plus-gilt.vercel.app/" target="_blank">https://talent-plus-gilt.vercel.app/</a>
</h2>

<div align="left">
  <img alt="Logo" src="https://github.com/Jerrydev01/talent_plus/blob/master/src/assets/techtime.png?raw=true" width="100%" />
</div>

<h2 align="center">
 <a href="https://youtu.be/mY1b4wU7bGA/" target="_blank">YOUTUBE PROJECT VIDEO </a>
</h2>

# Talent Plus 

This is a front End Development project task, that was given by TALENT PLUS.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can clone this project to your local Machine and setting up your app. This doesn't rely on any external dependencies or services._

1. Clone the repo

   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```

3. Install NPM packages

   ```sh
    yarn install
   ```
   
4. Start the local server

   ```sh
    yarn dev
   ```
   
### Installation and Set up of Docker

_Below is an example of how you can dockererize this React application._

1. Download Docker App 
   <a href="https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module" target="_blank">Docker Download</a>
   

3. Update Vite Config (skip this step if you are not using Vite React)

   We need to specify the host and port in vite.config.js in order to work with the Docker.

   ```sh
   plugins: [react()],
   server: {
    host: true,
    port: 8000, // This is the port which we will use in docker
   },
   ```
   
4. Setup Docker

   Use docker-composer for it as it's easier to scale as compared to relying on Dockerfile.

   First, we will add `docker-compose.yml` within the root of the project

   ```sh
   version: "3.4"
   services:
    vite_docker:
      image: node:alpine
      container_name: vite_docker
      entrypoint: /bin/sh
      ports:
        - 8000:8000
      working_dir: /srv/app
      volumes:
        - type: bind
          source: ./
          target: /srv/app
      tty: true
   ```
   
5. Build the Docker Container

   So far, we have added scripts to build our environment and have these files `docker-compose.yml` in our project
   Run this command to build the image on your local machine and start the container. do this only for the first time
   
   ```sh
    docker-compose up --build --no-recreate -d
   ```
   From the second time, we can use
    ```sh
   docker-compose up -d
   ```
6. Now our container is up and you should be able to test it using the following command
    ```sh
   docker-compose ps
   ```
   
8. Build and start the Application

   Just to clarify, we have a running container, but not the installed or running react app. For that, we need to log into the container and then execute the commands
    ```sh
   docker exec -it vite_docker sh
   ```
   
9.We have entered the container and now need to run the commands to install the Node packages and start the app
  ```sh
   yarn install && yarn dev
   ```
 It will install the packages and the application will run on the defined ports
   
10. Next time only run the below command at step 9 to start the dockerized application.
    ```sh
     yarn dev
    ``` 


## Authors

- [@jerrydev01](https://github.com/Jerrydev01)
