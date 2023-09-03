import { DAT_GHE, THANH_TOAN } from "../types/datGheType";

export const datGheAction = (data) => {
    return {
        type: DAT_GHE,
        payload: data,
    };
}
export const thanhToanAction = () => {
    return {
        type: THANH_TOAN,
    };
}