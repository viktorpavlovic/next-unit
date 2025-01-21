export enum SelectedPage {
  Home = "home",
  OurProducts = "ourproducts",
  WhyNextUnit = "whynextunit",
  ContactUs = "contactus",
}
export interface ProductType {
  icon: JSX.Element;
  title: string | JSX.Element | any;
  description: string | JSX.Element | any;
}
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
