import { EnumConvert } from "src/interface/consts/enum.const";
type TabMenu = {
  title: string;
  isActive: boolean;
};

type NavMenu = {
  name: string;
  active: string;
  inactive: string;
  path?: string;
  isActive: boolean;
};

type ClassType = {
  class: keyof typeof EnumConvert.AssetClass;
  selectName: string;
  isAble: boolean;
};

type DistrictIcon = {
  gu: string;
  src: string;
};

export { TabMenu, NavMenu, ClassType, DistrictIcon };
