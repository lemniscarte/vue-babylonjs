let Vue = require('vue');
let build = require('begin-build');
let { create, register } = require('begin-build/router');
Vue.use(require('../'));

let app = require('./app/vue.pug');
// debugger;

let router = create({
  base: '/vue-babylonjs/',
});

module.exports = build({
  router,
  components: { app: app.default },
});

register([
  {
    name: 'home',
    path: '/home',
    component: require('./home/vue.pug').default,
  }, {
    name: 'logo',
    path: '/logo',
    component: require('./logo/vue.pug').default,
  }, {
    name: 'scene',
    path: '/scene',
    component: require('./scene/vue.pug').default,
  }, {
    name: 'animation',
    path: '/animation',
    component: require('./animation/vue.pug').default,
  }, {
    name: 'material',
    path: '/material',
    component: require('./material/vue.pug').default,
  }, {
    name: 'shader',
    path: '/shader',
    component: require('./shader/vue.pug').default,
  }, {
    name: 'properties',
    path: '/properties',
    component: require('./properties/vue.pug').default,
  }, {
    name: 'physics',
    path: '/physics',
    component: require('./physics/vue.pug').default,
  }, {
    path: '*',
    redirect: '/home',
  },
]);
