export default {
    namespaced: true,
    state: {
        menuHidden: false,
        breakpoint: 'xs',
    },
    mutations: {

        UPDATE_NAV_MENU_HIDDEN(state, val) {
            state.menuHidden = val
        },

        UPDATE_BREAKPOINT(state) {
            if (window.innerWidth < 576) state.breakpoint = 'xs'
            else if (window.innerWidth >= 576 && window.innerWidth < 768) state.breakpoint = 'sm'
            else if (window.innerWidth >= 768 && window.innerWidth < 992) state.breakpoint = 'md'
            else if (window.innerWidth >= 992 && window.innerWidth < 1200) state.breakpoint = 'lg'
            else if (window.innerWidth >= 1200 && window.innerWidth < 1400) state.breakpoint = 'xl'
            else state.breakpoint = 'xxl'

            if (state.breakpoint === "xl") {
                state.menuHidden = false
            } else {
                state.menuHidden = true
            }
        },
    }
}
