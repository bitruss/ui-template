export default [
    {
        header: 'Pages',
        items: [
            {
                name: 'Welcome',
                icon: 'BoxIcon',
                menu_hidden: true,
                path: '/',
                component: () => import('../pages/welcome.vue'),
                meta:{
                    layout:'vertical',
                    auth: (islogin, roles, permissions) => {
                        return islogin;
                    }            
                }
            },
        ]
    },
    {
        header: 'Admin',
        items: [
            {
                name: 'admin',
                path: '/admin',
                component: () => import('../pages/admin/admin.vue'),
                meta:{
                    layout:'vertical',
                    auth: (islogin, roles, permissions) => {
                        return islogin && roles.includes('admin')
                    }           
                }
            }
        ]
    },
    {
        header: 'CommonPages',
        items: [
            {
                name: 'Common',
                icon: '',
                children: [
                    {
                        name: 'redirect-google',
                        path: 'https://google.com',
                        meta:{
                            layout:'vertical'         
                        }
                    },
                ]
            },
        ]
    },

    {
        header: 'Display',
        items: [
            {
                name:'Cards',
                path: '/display/cards',
                icon:'SquareIcon',
                component: () => import('../pages/cards/cards.vue'),            
                meta:{
                    layout:'vertical',
                    auth: (islogin, roles, permissions) => {
                        return islogin;
                    }           
                }
            }
        ]
    },

    {
        header: 'Components',
        items: [
            {
                name: 'Forms',
                icon: 'FolderIcon',
                children: [
                    {
                        name: 'Input',
                        path: '/pages/form/input',
                        component: () => import('../pages/form/input/input.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'Input Group',
                        path: '/pages/form/input_group',
                        component: () => import('../pages/form/input_group/input_group.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'CheckBox',
                        path: '/pages/form/checkbox',
                        component: () => import('../pages/form/checkbox/checkbox.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'Radio',
                        path: '/pages/form/radio',
                        component: () => import('../pages/form/radio/radio.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'Select',
                        path: '/pages/form/select',
                        component: () => import('../pages/form/select/select.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'File',
                        path: '/pages/form/fileinput',
                        component: () => import('../pages/form/fileinput/fileinput.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'Rating',
                        path: '/pages/form/rating',
                        component: () => import('../pages/form/rating/rating.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'Slider',
                        path: '/pages/form/slider',
                        component: () => import('../pages/form/slider/slider.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },


                ]
            },
            {
                name: 'Buttons',
                icon: 'BoldIcon',
                children: [
                    {
                        name: 'Basic',
                        path: '/pages/buttons',
                        component: () => import('../pages/buttons/basic/buttons.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'Group',
                        path: '/pages/button_group',
                        component: () => import('../pages/buttons/group/group.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'Spin',
                        path: '/pages/button_spin',
                        component: () => import('../pages/buttons/spin/spin.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    }
                ]
            },

            {

                name: 'Component',
                icon: 'GridIcon',
                children: [
                    {
                        name: 'tab',
                        path: '/pages/component/tab',
                        component: () => import('../pages/component/tab/tab.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },

                    {
                        name: 'listgroup',
                        path: '/pages/component/listgroup',
                        component: () => import('../pages/component/listgroup/listgroup.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },

                    {
                        name: 'collapse',
                        path: '/pages/component/collapse',
                        component: () => import('../pages/component/collapse/collapse.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },

                    {
                        name: 'dropdown',
                        path: '/pages/component/dropdown',
                        component: () => import('../pages/component/dropdown/dropdown.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'static-alert',
                        path: '/pages/component/alert',
                        component: () => import('../pages/component/alert/alert.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'toast',
                        path: '/pages/component/toast',
                        component: () => import('../pages/component/toast/toast.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'modal',
                        path: '/pages/component/modal',
                        component: () => import('../pages/component/modal/modal.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'badge',
                        path: '/pages/component/badge',
                        component: () => import('../pages/component/badge/badge.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'avatar',
                        path: '/pages/component/avatar',
                        component: () => import('../pages/component/avatar/avatar.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'tooltip',
                        path: '/pages/component/tooltip',
                        component: () => import('../pages/component/tooltip/tooltip.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'progress',
                        path: '/pages/component/progress',
                        component: () => import('../pages/component/progress/progress.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'spinner',
                        path: '/pages/component/spinner',
                        component: () => import('../pages/component/spinner/spinner.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'overlay',
                        path: '/pages/component/overlay',
                        component: () => import('../pages/component/overlay/overlay.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'pagination',
                        path: '/pages/component/pagination',
                        component: () => import('../pages/component/pagination/pagination.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                ]
            },

            {
                name:'Tables',
                icon:'LayoutIcon',
                children:[
                    {
                        name: 'GoodTable',
                        path: '/pages/table/goodtable',
                        component: () => import('../pages/table/table.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    }
                ]
            },

            {
                name: 'Extensions',
                icon: 'PackageIcon',
                children: [
                    {
                        name: 'code-Highlight',
                        path: '/pages/extension/code/highlight',
                        component: () => import('../pages/extension/code/highlight.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'DateTime',
                        path: '/pages/extension/datetime',
                        component: () => import('../pages/extension/datetime/datetime.vue'),
                        meta:{
                            layout:'vertical',
                            auth: (islogin, roles, permissions) => {
                                return islogin;
                            }           
                        }
                    },
                    {
                        name: 'ApexCharts',
                        children:[
                            {
                                name:'Line',
                                path: '/pages/extension/apexcharts/line',
                                component: () => import('../pages/extension/apexcharts/line/line.vue'),
                                meta:{
                                    layout:'vertical',
                                    auth: (islogin, roles, permissions) => {
                                        return islogin;
                                    }           
                                }
                            },
                            {
                                name:'Price',
                                path: '/pages/extension/apexcharts/price',
                                component: () => import('../pages/extension/apexcharts/price/price.vue'),
                                meta:{
                                    layout:'vertical',
                                    auth: (islogin, roles, permissions) => {
                                        return islogin;
                                    }           
                                }
                            },
                            {
                                name:'Column',
                                path: '/pages/extension/apexcharts/column',
                                component: () => import('../pages/extension/apexcharts/column/column.vue'),
                                meta:{
                                    layout:'vertical',
                                    auth: (islogin, roles, permissions) => {
                                        return islogin;
                                    }           
                                }
                            },
                            {
                                name:'Pie',
                                path: '/pages/extension/apexcharts/pie',
                                component: () => import('../pages/extension/apexcharts/pie/pie.vue'),
                                meta:{
                                    layout:'vertical',
                                    auth: (islogin, roles, permissions) => {
                                        return islogin;
                                    }           
                                }
                            },
                            {
                                name:'Radar',
                                path: '/pages/extension/apexcharts/dadar',
                                component: () => import('../pages/extension/apexcharts/radar/radar.vue'),
                                meta:{
                                    layout:'vertical',
                                    auth: (islogin, roles, permissions) => {
                                        return islogin;
                                    }           
                                }
                            }
                        ]
                    },
                ]
            },
        ]
    }

]