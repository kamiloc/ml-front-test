const getItems = (search) => fetch(`/api/items?search=${search}`).then((res) => res.json());
const getItem = (itemId) => fetch(`/api/items/${itemId}`).then((res) => res.json());

export { getItems, getItem };
