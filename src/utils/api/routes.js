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
        accept: "sharing/accept",
        delete: "sharing/delete",
        offers: "sharing/offers",
        getAvailableOffers: "sharing/getAvailableOffers",
        bookings: "sharing/bookings",
        leave: "sharing/leave",
    },
};

export { base, routes };