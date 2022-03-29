#!/bin/bash

rm form.js
tsc --p tsconfig.json
python3 -m http.server
