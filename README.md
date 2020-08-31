# How this project was set up
* `ng new code-splitting-repro`
* `cd code-splitting-repro`
* `npm run ng -- g library test1`
* `npm run ng -- g library test2`
* `npm run ng -- g library test3`
* Source code modifications

# Problem
How to reproduce
* `npm i`
* `npm run build -- --project=test1`
* `npm run build -- --project=test2`
* `npm run build -- --project=test3`
* `cd dist/test3`
* `npm link`
* `cd ../..`
* `npm link @prebuilt/test3`

---

* `npm run start -- --configuration=fromdist`: works as expected
* `npm run start -- --configuration=fromsource`: problems
