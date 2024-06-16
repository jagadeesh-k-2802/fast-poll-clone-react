#!/bin/bash

# Navigate to the client directory and install dependencies
cd client
npm install

# Build the React project
npm run build

# Move the build output to the public directory in the root
mv build/* ../public

# Navigate back to the root directory and install server dependencies
cd ..
npm install
