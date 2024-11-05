export enum SelectedPage {
  Home = "home",
  OurProducts = "ourproducts",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}
export interface ProductType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
