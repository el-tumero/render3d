
# TypeScript Template

Simple boilderplate for creating TypeScript project in fast way.




## How to use?

1. Clone it from repo.

```bash
git clone https://github.com/el-tumero/typescript-template.git typescript-template
```

2. Install dependecies.
```bash
cd typescript-template
yarn install
```

3. Build example file (src/main.ts), output will be in dist folder.
```bash
yarn build
```

4. (Alternative) Run dev server, which rebuilds the project after making any changes.
  ```bash
yarn run dev
```  
## Config
In webpack.config.js file you can rename output files and also change path for source files.
```javascript
module.exports = {
  entry: { main:'./src/main.ts' },
  ...
}
```

