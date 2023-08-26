import { XOA_GHE } from "../types/xoaGheType";

export const xoaGheAction = (data) => {
    return {
        type: XOA_GHE,
        payload: data,
    };
}