const base = "http://localhost:8080/api/";
const routes = {
    user: {
        save: "user/save",
    },
    residence: {
        add: "residence/add",
        get: "residence/get",
        delete: "residence/delete",
    },
    sharing: {
        add: "sharing/add",
        offers: "sharing/offers",
        getAvailableOffers: "sharing/getAvailableOffers",
        accept: "sharing/accept",
        delete: "sharing/delete",
    },
};

export { base, routes };