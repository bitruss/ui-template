import Vue from 'vue'
import VueRouter from 'vue-router'
import config from "../../config/config.js";


Vue.use(VueRouter)

const routes = []

//config routes from access config file
function loopItem(item) {
  if ('children' in item) {
    item.children.forEach((child) => {
      loopItem(child);
    })
  } else {
    if (('component' in item) && ('path' in item)) {
      routes.push({
        path: item.path,
        component: item.component,
        meta:item.meta,
        name:item.name,
      });
    }
  }
}

config.router.forEach((topitem) => {
  topitem.items.forEach((item) => {
    loopItem(item);
  })
})

//push the core routers
for (var item of Object.values(config.core_router)) {
  routes.push({
    name:item.name,
    path: item.path,
    component: item.component,
    meta:item.meta
  });
}



//end of config
const router = new VueRouter({
  mode: 'history',
  routes: routes
})


export default router
