import createStore from 'unistore'

const store = createStore({ count: 0 })

const actions = (theStore) => ({
  increment: ({ count }) => ({ count: count + 1 }),
  decrement: ({ count }) => ({ count: count - 1 })
})

// Look: NO REDUCERS!

export { store, actions }
