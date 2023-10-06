import * as ACTIONS from "./actions";

export const changeService = (service) => ({
    type: ACTIONS.CHANGE_SERVICE,
    payload: service
})