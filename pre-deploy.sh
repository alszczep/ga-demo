#!/bin/bash

version=$1

if [[ -n "$version" ]]
then
    git checkout master
    git pull

    git checkout -b "version/$version"
    npm version "$version" --no-git-tag-version
    
    git add .
    new_version=`grep version package.json | awk -F \" '{print $4}' | xargs`
    git commit -m "Bump package version to $new_version"

    git branch -m "version/$new_version"
    git push -u origin "version/$new_version"

    echo
    echo "After merging the pull request, run deploy.sh to deploy new version"
else
    echo "Version has to be set"
fi