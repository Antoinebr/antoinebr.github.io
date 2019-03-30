
# Route lazy loading 

```JavaScript
import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Projects" */ './views/Projects.vue')
    },
    {
      path: '/team',
      name: 'team',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Team" */ './views/Team.vue')
    }
  ]
})

```

Will generate 

```

  File                                   Size              Gzipped

  dist/js/chunk-vendors.a4f5e1b1.js      228.12 KiB        69.45 KiB
  dist/js/Projects.7a11b858.js           54.00 KiB         14.19 KiB
  dist/js/app.66f6836e.js                11.26 KiB         4.02 KiB
  dist/js/Team.7bfd7588.js               1.70 KiB          0.85 KiB
  dist/css/chunk-vendors.288b8b75.css    152.50 KiB        19.93 KiB
  dist/css/Projects.33462846.css         19.46 KiB         3.18 KiB
  dist/css/app.ae076afc.css              0.24 KiB          0.14 KiB

```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Text 

```html 

    <p class="red white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae officia dolorem
      libero nulla officiis soluta corrupti corporis sapiente, qui voluptatum ipsam ullam perspiciatis, quisquam
      adipisci accusantium dolor deleniti pariatur.</p>
    <p class="pink red--text lighten-4 text--darken-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
      quaerat doloremque optio cupiditate odio rem. Fugiat veniam, dolorum assumenda sunt facilis repudiandae illo nisi
      nihil, molestiae temporibus, debitis at maiores.</p>

    <h1 class="display-4">Massive display</h1>
    <h4 class="display-1"> smaller display</h4>
    <p class="headline">This is a headline</p>
    <p class="subheading font-weight-bold" > Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel
      vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom
      argumentum vel. Ut lorem bocent hendrerit eam.
    </p>

```


### Btn 


```html 

    <v-btn class="pink white--text"> click me</v-btn>

    <v-btn color="pink" depressed> click me again</v-btn>

    <v-btn flat color="pink"> click me</v-btn>

    <v-btn depressed class="blue white--text">
      <v-icon left>email</v-icon>
      <span> shoot me an email </span>
    </v-btn>


    <v-btn depressed small class="blue white--text">
      <v-icon left small>email</v-icon>
      <span> shoot me an email </span>
    </v-btn>


    <v-btn depressed large class="blue white--text">
      <span> shoot me an email </span>
      <v-icon right large>email</v-icon>
    </v-btn>


    <v-btn depressed small dark fab color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>

```

### responsive classes 


```html 
<v-btn  class=" pink hidden-md-and-up">LL</v-btn>
```


### Grid 

```html 

 <v-container class="my-5">
        <v-layout row wrap>

          <v-flex xs12 md6>
            <v-btn outline block class="primary">1</v-btn>
          </v-flex>

          <v-flex xs12 md2>
            <v-btn outline block class="primary">2</v-btn>
          </v-flex>

            <v-flex xs4 md2>
            <v-btn outline block class="primary">2</v-btn>
          </v-flex>
          
          <v-flex xs4 md2>
            <v-btn outline block class="primary">2</v-btn>
          </v-flex>
        
        </v-layout>


        <v-layout row wrap justify-space-around>

          <!-- we can ask to  be centered  justify-space-around justify-space-end --> 
          
          <v-flex xs4 md3>
            <v-btn outline block class="primary">2</v-btn>
          </v-flex>

          <v-flex xs4 md3>
            <v-btn outline block class="primary">2</v-btn>
          </v-flex>

        </v-layout>


    </v-container>

``` 