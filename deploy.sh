#!/bin/bash

git checkout master
git pull

git checkout gh-pages
git rebase master

npm run deploy

git checkout master

new_version=`grep version package.json | awk -F \" '{print $4}' | xargs`
git branch -d "version/$new_version"