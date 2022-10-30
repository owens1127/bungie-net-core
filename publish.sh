#!/bin/sh -ex

# read package.json
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

# commit to repo
git add --all
git commit -m "Release $PACKAGE_VERSION"

# publish
cd lib/ && npm publish


