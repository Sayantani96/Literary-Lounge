import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    image:"https://basmo.app/wp-content/uploads/2022/12/benefits-of-reading-fiction.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    image:"https://www.onceuponapicture.co.uk/wp-content/uploads/2017/04/non-fiction.jpg",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    image:"https://assets3.thrillist.com/v1/image/2709563/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "mystery",
    image:"https://images.ctfassets.net/9i3f0j4g4w7c/7gDsetIrGqA3BwwCPi14l7/cdeba24de894da5668deb0c37dfdb5ba/best-mystery-audiobooks-social.jpg",
    description:
      "Mystery books are like exciting puzzles where you try to find out secrets and solve mysteries.",
  },
  {
    _id: uuid(),
    categoryName: "humour",
    image:"https://i.guim.co.uk/img/media/f4fd1321000a59cd57b1e1d4a31d31d447370c06/0_0_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1058055cc1472600d96100ccb71c1fa9",
    description:
      "Humor books are your ticket to a world of laughter, where witty words and comical tales make everyday life a little brighter.",
  },
  {
    _id: uuid(),
    categoryName: "fairy tales",
    image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/fairytales-647_071817075323.jpg",
    description:
      "Fairy tales transport us to magical realms where dreams come true, and enchanting adventures unfold.",
  },
];
