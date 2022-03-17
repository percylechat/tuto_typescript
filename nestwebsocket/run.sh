#!/bin/bash
pkill npm
pkill python3
pkill node
cd front && ./build.sh
pwd
cd ../
cd backend &&   npm run start &
cd front && python3 -m http.server & 