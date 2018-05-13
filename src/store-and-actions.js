import createStore from 'unistore'

const store = createStore({ count: 0 })

const actions = (theStore) => ({
  increment: ({ count }) => ({ count: count + 1 }),
  decrement: ({ count }) => ({ count: count - 1 })
})

export { store, actions }
