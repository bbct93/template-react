export default {
    namespace: 'modelTwo',
    state: {
        count: 0,
        money: 'heiehi'
    },

    reducers: {
        add  () { return {
            ...state,
            count: 2
        } },
    }
}