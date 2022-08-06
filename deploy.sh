#!/bin/bash

git checkout master
git pull

git checkout gh-pages
git rebase master

npm run deploy

git checkout master