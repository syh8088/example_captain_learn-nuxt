import { fetchCartItems } from "~/api";

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'; 

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
    },
    setCartItems(state, cartItems) {
        state.cartItems = cartItems;
    },
}

export const actions = {

    async nuxtServerInit(storeContext, nustContext) {
        // const { data } = await fetchCartItems();
        // console.log("nuxtServerInit", data);
        // storeContext.commit('setCartItems', data.map((item) => ({
        //         ...item,
        //         imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        //     }))
        // );
        await storeContext.dispatch(FETCH_CART_ITEMS);
    },
    async [FETCH_CART_ITEMS]({ commit }) {
        const { data } = await fetchCartItems();
        console.log("FETCH_CART_ITEMS", data);
        commit('setCartItems', data.map((item) => ({
                ...item,
                imageUrl: `${item.imageUrl}?random=${Math.random()}`,
            }))
        );
    }
}
   