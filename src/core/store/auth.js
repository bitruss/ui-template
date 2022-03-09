export default {
    namespaced: true,
    state: {
        my_web_token: false, //weather user has login already
        my_roles: [],
        my_permissions: [],
        access: {},
    },
    getters: {

    },
    mutations: {

        INI_MY_LOGIN_ROLES_PERMISSIONS(state) {
            try {
                state.my_roles = JSON.parse(localStorage.getItem('my_roles'))
                if (state.my_roles === null) {
                    state.my_roles = []
                }
            } catch (err) {
                state.my_roles = []
            }
            try {
                state.my_permissions = JSON.parse(localStorage.getItem('my_permissions'))
                if (state.my_permissions === null) {
                    state.my_permissions = []
                }
            } catch (err) {
                state.my_permissions = []
            }

            let ls_my_web_token = localStorage.getItem('my_web_token');
            if (!ls_my_web_token) {
                state.my_web_token = false;
            } else {
                state.my_web_token = ls_my_web_token;
            }

            refreshAccess(state.access, state.my_web_token, state.my_roles, state.my_permissions);
        },

        UPDATE_MY_LOGIN_ROLES_PERMISSIONS(state, l_r_p) {
            state.my_roles = l_r_p.roles;
            state.my_permissions = l_r_p.permissions;
            state.my_web_token = l_r_p.web_token;
            if (!state.my_web_token) {
                localStorage.removeItem('my_web_token');
            } else {
                localStorage.setItem('my_web_token', state.my_web_token);
            }
            localStorage.setItem('my_roles', JSON.stringify(state.my_roles));
            localStorage.setItem('my_permissions', JSON.stringify(state.my_permissions));
            refreshAccess(state.access, state.my_web_token, state.my_roles, state.my_permissions);
        },

        INI_ACCESS(state, new_access) {
            if (!new_access.hasOwnProperty('path_forbidden')) {
                new_access.path_forbidden = {};
            }

            refreshAccess(new_access, state.my_web_token, state.my_roles, state.my_permissions);
            state.access = new_access;
        },

        TOGGLE_ACCESS_GROUPID(state, groupid) {
            //toggle access group open|close
            function children_loop_toggle(item) {
                if (!item.hasOwnProperty('children')) {
                    return
                } else {
                    if (item.groupid == groupid) {
                        item.active = item.active ? false : true
                        return
                    }
                    item.children.forEach((_, index, array) => {
                        children_loop_toggle(array[index])
                    });
                }
            }

            state.access.router.forEach((_, index, array) => {
                array[index].items.forEach((_, sub_index, sub_array) => {
                    children_loop_toggle(sub_array[sub_index])
                });
            });

            //console.log(groupid,state );
        },

        UPDATE_ACCESS_ACTIVE_PATH(state, path) {
            //set all item active flag to false except the one with path matched
            //and the same time set the matched item's all parent to active==true
            function loop_match_path(item) {
                if (!item.hasOwnProperty('children')) {
                    if (item.path == path) {
                        item.active = true
                        return true
                    } else {
                        item.active = false
                        return false
                    }
                } else {
                    let child_result = false
                    for (let i = 0; i < item.children.length; i++) {
                        if (loop_match_path(item.children[i])) {
                            item.active = true
                            child_result = true
                        }
                    }
                    return child_result;
                }
            }


            state.access.router.forEach((_, index, array) => {
                array[index].items.forEach((_, sub_index, sub_array) => {
                    loop_match_path(sub_array[sub_index])
                });
            });


        }

    },
    actions: {},
}


function refreshAccess(new_access, web_token, roles, permissions) {

    //console.log("here we refreshAccess");
    //loop the access and set the correct groupid and active 
    let groupid_ = 0;

    function children_loop_gen_groupid(item) {
        item.active = false; //set all active to false to initialze data
        if (!item.hasOwnProperty('children')) {
            return
        } else {
            item.groupid = groupid_
            groupid_++
            item.children.forEach((_, index, array) => {
                children_loop_gen_groupid(array[index])
            });
        }
    }

    new_access.router.forEach((_, index, array) => {
        array[index].items.forEach((_, sub_index, sub_array) => {
            children_loop_gen_groupid(sub_array[sub_index])
        });
    });


    //loop to set path_forbidden and mark the forbidden tag

    //return true for forbidden
    function mark_forbidden(item) {
        if (!item.hasOwnProperty('children')) {
            if (item.meta.auth) {
                let itemforbiddened = !item.meta.auth(web_token, roles, permissions)
                item.forbidden = itemforbiddened
                if (item.path) { new_access.path_forbidden[item.path] = itemforbiddened }
                return itemforbiddened
            } else {
                if (item.path) { new_access.path_forbidden[item.path] = false }
                item.forbidden = false
                return false
            }
        } else {
            if (item.children.length == 0) {
                item.forbidden = true
                return true
            }

            let child_result = true
            for (let i = 0; i < item.children.length; i++) {
                if (!mark_forbidden(item.children[i])) {
                    item.forbidden = false
                    child_result = false
                } else {
                    item.forbidden = true
                }
            }
            return child_result;
        }
    }


    new_access.router.forEach((_, index, array) => {
        array[index].forbidden = true
        array[index].items.forEach((_, sub_index, sub_array) => {
            if (!mark_forbidden(sub_array[sub_index])) {
                array[index].forbidden = false
            }
        });
    });

    //process menu_hidden
    function mark_menu_hidden(item) {
        if (!item.hasOwnProperty('children')) {
            if (item.forbidden || item.menu_hidden) {
                item.menu_hidden_ = true;
                return true;
            } else {
                item.menu_hidden_ = false;
                return false
            }
        } else {
            item.menu_hidden_ = true;
            item.children.forEach((_, index, array) => {
                if (!mark_menu_hidden(array[index])) {
                    item.menu_hidden_ = false;
                }
            });
            return item.menu_hidden_;
        }
    }

    new_access.router.forEach((_, index, array) => {
        array[index].menu_hidden_ = true
        array[index].items.forEach((_, sub_index, sub_array) => {
            if (!mark_menu_hidden(sub_array[sub_index])) {
                array[index].menu_hidden_ = false
            }
        });
    });


}