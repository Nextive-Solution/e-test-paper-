import {defineStore} from "pinia";
export const useOrderStore = defineStore('order', () => {
    const order = ref({});

    const setOrder = (data) => {
        order.value = data;
    }

    return {
      order, setOrder
    }
})