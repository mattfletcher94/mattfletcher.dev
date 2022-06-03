---
title: "Online Multiplayer Shooter"
description: "This project was created for the full-stack module at University. I had to create a full-stack application and demonstrate the ability to handle real-time data using WebSockets."
keywords: "Vuejs, Game, MongoDB, Node.js, WebSockets"
image: "/images/project-online-shooter-thumbnail.webp"
banner: "/images/project-online-shooter-banner.webp"
type: "Full Stack Project"
date: "3"
tags:
  - "Vue.js"
  - "Websockets"
  - "MongoDB"
  - "Express"
  - "WebGL"
---

# Online Multiplayer Shooter
This project was created for the full-stack module at Plymouth University and received
a strong first. 

<a href="https://github.com/mattfletcher94/multiplayer-shooter" target="_blank">See GitHub Repo</a>

<a href="https://youtu.be/hVRlS9BiE78?t=83" target="_blank">See Demo Here</a>

## Overview
For this module, we had to create a full-stack application and demonstrate
our ability to handle real-time data using WebSockets. We were also
encouraged to write both unit and end-to-end tests. My idea
was to create an online multiplayer shooter.

## Web Sockets
During gameplay, the server and client interacts through web sockets. It was very important to handle all game logic on the server to prevent the user from cheating by manipulating the JavaScript variables. The 'game loop' which runs on the server at 30 frames per second, emits a ‘tick’ event to the client after each frame which sends with it the data needed to render the game world on the client’s computer screen. The client sends key down, key up and click events to the server through its web socket, the server then processes this information and returns the new model.

## Front-end
This application was built using Vue, along with Pixi.js to render the game on a WebGL context.

## Server
The server was built using Node, Express, TSOA, Mongoose with MongoDB and socket.io.
There are some API endpoints to handle user information, but most of the work
is done with WebSockets.
