import { IReport } from "src/interface/dtos/report.interface";

const resultDatas: IReport.IDto[] = [
  {
    id: "",
    status: "REQUEST",
    type: "SEARCH",
    data: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    cheonseLog: {
      id: "",
      class: "VILLA",
      status: "SAFETY",
      isExpire: true,
      roadAddress: "강남구 테헤란로 22길 76",
      floor: 502,
      createdAt: new Date(),
      user: undefined,
    },
  },
  {
    id: "",
    status: "REQUEST",
    type: "SEARCH",
    data: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    cheonseLog: {
      id: "",
      class: "VILLA",
      status: "WARNING",
      isExpire: true,
      roadAddress: "송파구 가락동 173-6",
      floor: 102,
      createdAt: new Date(),
      user: undefined,
    },
  },
  {
    id: "",
    status: "REQUEST",
    type: "SEARCH",
    data: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    cheonseLog: {
      id: "",
      class: "VILLA",
      status: "DANGER",
      isExpire: true,
      roadAddress: "관악구 낙성대로 199길",
      floor: 202,
      createdAt: new Date(),
      user: undefined,
    },
  },
];

const jeonseDatas: IReport.IDto[] = [
  {
    id: "",
    status: "REQUEST",
    type: "SEARCH",
    data: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    cheonseLog: {
      id: "",
      class: "VILLA",
      status: "DANGER",
      isExpire: true,
      roadAddress: "강남구 테헤란로 22길 76",
      floor: 101,
      createdAt: new Date(),
      user: undefined,
    },
  },
  {
    id: "",
    status: "REQUEST",
    type: "SEARCH",
    data: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    cheonseLog: {
      id: "",
      class: "VILLA",
      status: "DANGER",
      isExpire: false,
      roadAddress: "송파구 가락동 173-6",
      floor: 110,
      createdAt: new Date(),
      user: undefined,
    },
  },
  {
    id: "",
    status: "REQUEST",
    type: "SEARCH",
    data: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    cheonseLog: {
      id: "",
      class: "VILLA",
      status: "DANGER",
      isExpire: false,
      roadAddress: "관악구 낙성대로 199길",
      floor: 202,
      createdAt: new Date(),
      user: undefined,
    },
  },
];

export { resultDatas, jeonseDatas };
