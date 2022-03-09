# uui-full-examples

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

### Architecture
```
0. multi-lan supported by vue-i18n
each component should maintain its own language text


1. Based on [ bootstrap-vue ](https://bootstrap-vue.org/)
You can reference it for more detailed components api.

2. Dynamic bootstrap-vue component include : 
[ToastPlugin, ModalPlugin,TooltipPlugin]
They are already registered in the main.js for global reference.

3. Third-party plugins include:
3.1 [v-calendar](https://vcalendar.io/)
3.2 [vue-good-table](https://github.com/xaksis/vue-good-table)
They are already registered in the main.js for global reference.

4. Http api plugins include:
4.1 axios for http request.
4.2 axios-mock-adapter for mocking http-server api.

5. [vue-feather-icons](https://vue-feather-icons.egoist.sh/) used as icon system.
It is already registered in the main.js for global reference.

6. [vue-prism-editor] used for code-highlight.

7. [vue-apexcharts] used for charts



```


### How to use
```
1. Edit 'config/config.js' file where you should define your own router.
Don't delete core_router items as they are required for core system.

2. Inside 'pages' folder add your own pages.

3. Please reference the 'pages/auth/login.vue' for auth system.
You can reference the user identity info using three items inside the global $store :

this.$store.state.auth.my_web_token  //string 
this.$store.state.auth.roles         //array of string
this.$store.state.auth.permissions   //array of string


4. Api used after login to set user identity into browser:

this.$store.commit("auth/UPDATE_MY_LOGIN_ROLES_PERMISSIONS", {
                        web_token: 'server-returned-web-token',
                        roles: 'server-returned-rules',
                        permissions: 'server-returned-permissions',
                    });        

5. Api used after logout to remove user identity from browser:

this.$store.commit("auth/UPDATE_MY_LOGIN_ROLES_PERMISSIONS", {
                web_token: false,
                roles: [],
                permissions: []
            });

6. Api used for page redirection :

this.$router.push({path: '/' }); //redirect to root page

```

