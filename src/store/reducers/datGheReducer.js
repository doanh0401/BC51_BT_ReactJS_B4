import data from "../../data/DanhSachGhe.json";
import { DAT_GHE, THANH_TOAN } from "../types/datGheType";
import { XOA_GHE } from "../types/xoaGheType";

const DEFAULT_STATE = {
  danhSachGhe: data,
  buyTickets: [],
};

export const datGheReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let chair;
      const tempdata = JSON.parse(JSON.stringify(state.buyTickets));
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      for (const row of data.slice(1)) {
        chair = row.danhSachGhe.find(
          (element) => element.soGhe === action.payload.soGhe
        );
        if (chair) break;
      }
      const rowindex = data.findIndex((element) => {
        return element.hang === chair.soGhe.charAt(0);
      });

      const index = data[rowindex].danhSachGhe.findIndex(
        (element) => element.soGhe === chair.soGhe
      );

      data[rowindex].danhSachGhe[index].DangChon =
        !data[rowindex].danhSachGhe[index].DangChon;

      const index1 = tempdata.findIndex(
        (element) => element.soGhe === chair.soGhe
      );

      if (index1 !== -1) tempdata.splice(index1, 1);
      else tempdata.push(chair);

      state.buyTickets = tempdata;
      state.danhSachGhe = data;

      break;
    }
    case XOA_GHE: {
      const tempdata = JSON.parse(JSON.stringify(state.buyTickets));
      const index1 = tempdata.findIndex(
        (element) => element.soGhe === action.payload.soGhe
      );

      let chair;
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      for (const row of data.slice(1)) {
        chair = row.danhSachGhe.find(
          (element) => element.soGhe === action.payload.soGhe
        );
        if (chair) break;
      }
      const rowindex = data.findIndex((element) => {
        return element.hang === chair.soGhe.charAt(0);
      });

      const index = data[rowindex].danhSachGhe.findIndex(
        (element) => element.soGhe === chair.soGhe
      );

      data[rowindex].danhSachGhe[index].DangChon =
        !data[rowindex].danhSachGhe[index].DangChon;

      tempdata.splice(index1, 1);

      state.buyTickets = tempdata;
      state.danhSachGhe = data;
      break;
    }
    case THANH_TOAN: {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));

      for (const hang of data) {
        for (const ghe of hang.danhSachGhe) {
          if (ghe.DangChon) {
            ghe.daDat = !ghe.daDat;
            ghe.DangChon = !ghe.DangChon;
          }
        }
      }

      state.buyTickets = [];
      state.danhSachGhe = data;
    }
  }

  return { ...state };
};
