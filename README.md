# pollyjs-issue-33

> A Vue.js project for pollyjs-issue#33 demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
## code brief
### import pollyjs 
at src/main.js
>import "../pollyjs" 

### mock http request 
at mock/index.js
>app.use("/some/path",function(req. res){
>  ...
>});

### get data
at src/App.vue
>getData()
