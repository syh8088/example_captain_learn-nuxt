export const state = () => ({
    cartItems: [],
})

export const mutations = {
    addCartItem(state, cartItem) {
        const newCartItem = {
            ...cartItem,
            imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
        }
        state.cartItems.push(newCartItem);
    }
}

// export const actions = {
//     async fetchUser(context) {
//         const response = await axios.get('users/1');
//         context.commit('setUser', response.data);
//     }
// }
   