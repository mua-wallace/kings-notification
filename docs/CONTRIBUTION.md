# Welcome to the Kings Notification Service contribution guide

Thank you for your interest in contributing to this project.


In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## New Contributors 
### Steps to contribute
- Fork the repository and clone using ``git clone https://github.com/your-username/kings-notification``. You create a fork so you can make your changes without affecting the original.
- cd into your root directory 'kings-notification' to run the commands that follow.
- Add an upstream link to the main branch by executing ``git remote add upstream https://github.com/KambangSinclaire/kings-notification``. This is to help you keep track of all the chnages made on the main repo using git fetch and rebase commands.
- Next thing we install dependencies to get the project working locally. Kings Notifications four - Nest.js, Reddis, AWS JS SDK, Docker
  - Running ``npm install`` will install the Nest.js cli and the AWS JavaScript SDK. However we will need to do some manual configurations to get the application working locally.
  - 
