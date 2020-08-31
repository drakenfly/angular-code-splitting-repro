# Problem
How to reproduce
* `rm -rf dist/*`
* `npm i`
* `npm run build -- --project=test1 --prod`
* `npm run build -- --project=test2 --prod`
* `npm run build -- --project=test3 --prod`
* `cd dist/test3`
* `npm link`
* `cd ../..`
* `npm link @prebuilt/test3`

---

* `npm run start -- --configuration=fromsource`: does not work
* `npm run start -- --configuration=fromdist`: works as expected

After that, fromsource builds will run too (because Ivy already did it's job), but I'm not sure if it would be linked correctly


# How this project was set up
* `ng new code-splitting-repro`
* `cd code-splitting-repro`
* `npm run ng -- g library test1`
* `npm run ng -- g library test2`
* `npm run ng -- g library test3`
* Source code modifications
