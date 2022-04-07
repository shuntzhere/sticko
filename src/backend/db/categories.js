import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fauna",
    title: "Vulnerable",
    description:
      "A vulnerable species is a species which has been categorized by the International Union for Conservation of Nature that is threatened with extinction unless the circumstances that are threatening its survival and reproduction improve.",

    color: "darkorange",

  },
  {
    _id: uuid(),
    categoryName: "Fauna",
    title: "Endangered",
    description:
      "An endangered species is a species that is very likely to become extinct in the near future, either worldwide or in a particular political jurisdiction.",
    color: "darkred",
  },
  {
    _id: uuid(),
    categoryName: "Fauna",
    title: "Extinct",
    description:
      "Extinct species are species that have stopped breeding, died and no longer exist.",
    color: "black",
  },
];
