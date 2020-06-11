export default {
    namespace: 'hello',
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