#!/bin/sh -ex

npm run build

publish ()
{
    # commit to repo
    git add --all
    git commit -m "Release $PACKAGE_VERSION"

    # publish
    cd lib/
    npm publish
}

# read package.json
PACKAGE_VERSION=$(grep '"version"' package.json | cut -d '"' -f 4 | head -n 1)

# prompt message
while true; do
    read -p "Ready to commit version $PACKAGE_VERSION? (y/n)`echo $'\n> '`" yn
    case $yn in
        [Yy]* ) publish; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done



