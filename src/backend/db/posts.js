import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import {
  booksCat,
  catInArms,
  caturday,
  chomp,
  cuddlesCat,
  dogHuggingCat,
  family,
  kittenAdopt,
  napCat,
  rockstarCat,
  rudeCat,
} from ".";

export const posts = [
  {
    _id: uuid(),
    imageUrl: caturday,
    content: "Enjoying My Caturday!",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: booksCat,
    content: "Mama I am studying.",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: family,
    content: "Family trip with my two lil' ones.",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/2499282/pexels-photo-2499282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Those fishbits were yummy.",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: kittenAdopt,
    content:
      "Adopt this adorable abandoned baby. Contact me for more information: 9432435656",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: rockstarCat,
    content: "I am a Rockstar.*Smirks* *wink wink*",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: rudeCat,
    content: "How rude! Why is this hooman taking a photo of my butt.",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: catInArms,
    content: "Holding your baby cat in your arms is no lesser than therapy.",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: cuddlesCat,
    content: "I order you to give me cuddles, hooman.",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/16187713/pexels-photo-16187713/free-photo-of-kitten-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The world looks so smol from up here.",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "I sniff flowers.",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content:
      "I think that's what humans call a ghost. I am running away in 3...2...1",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: chomp,
    content: "Chomp!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.unsplash.com/photo-1634963980241-08a342c20eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1229&q=80",
    content: "Mama forgot to give me food. I am hangry.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: napCat,
    content: "I like naps. We'll get along if you don't wake me up.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/15171881/pexels-photo-15171881/free-photo-of-photo-of-a-tabby-kitten.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Bohemian Cat?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: dogHuggingCat,
    content: "Come here enemy, gimme a hug.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/2499282/pexels-photo-2499282.jpeg",
    content: "Humans are so crazy I swear.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/2835623/pexels-photo-2835623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Hi there!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
