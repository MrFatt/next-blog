#!/bin/sh
rm -rf node_modules/.cache
rm -rf .next/
rm -rf out/
node_modules/.bin/next build && node_modules/.bin/next export
touch out/.nojekyll
buildID=$(cat .next/BUILD_ID)

git add out/
git commit -m "Deploy Next.js to gh-pages, build id: $buildID"
git subtree push --prefix out origin gh-pages
