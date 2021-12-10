import { PriceDetail } from "./price-detail";
import { VisibleInstructors } from "./visible-instructors";

export interface Course {
  _class: string;
  id: number;
  title: string;
  url: string;
  price_detail: PriceDetail[];
  visible_instructors: VisibleInstructors[];
  image_125_H: string;
  image_240x135: string;
  image_480x270: string;

}
