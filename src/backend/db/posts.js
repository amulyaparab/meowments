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
  myCat,
  napCat,
  rockstarCat,
  rudeCat,
  scratchCat,
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
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshsharma",
    createdAt: "2021-09-10T08:20:45+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: booksCat,
    content: "Mama I am studying.",
    likes: {
      likeCount: 49,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "ameliasmith",
    createdAt: "2022-03-05T14:45:22+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: myCat,
    content: "A yawn from the heart leads to rainbows and dreams.",
    likes: {
      likeCount: 70,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "amulyaparab",
    createdAt: "2021-08-05T08:20:45+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: family,
    content: "Family trip with my two lil' ones.",
    likes: {
      likeCount: 51,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "natashaiyer",
    createdAt: "2023-06-18T09:10:59+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    imageUrl: kittenAdopt,
    content: "Adopt this adorable abandoned baby. Contact me: 9432435656",
    likes: {
      likeCount: 61,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshsharma",
    createdAt: "2022-11-28T19:05:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: rockstarCat,
    content: "I am a Rockstar.*smirk* *wink wink*",
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "jamesdavis",
    createdAt: "2023-06-11T15:40:30+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.unsplash.com/photo-1634963980241-08a342c20eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1229&q=80",
    content: "Mama forgot to give me food. I am hangry.",
    likes: {
      likeCount: 33,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "ameliasmith",
    createdAt: "2023-05-03T05:42:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: rudeCat,
    content: "How rude! Why is this hooman taking a photo of my butt.",
    likes: {
      likeCount: 55,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "noahmartinez",
    createdAt: "2022-06-25T11:15:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: catInArms,
    content: "Holding your baby cat in your arms is no lesser than therapy.",
    likes: {
      likeCount: 57,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "natashaiyer",
    createdAt: "2021-04-30T12:01:22+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/2499282/pexels-photo-2499282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Those fishbits were yummy.",
    likes: {
      likeCount: 37,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshsharma",
    createdAt: "2021-12-22T17:55:37+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: cuddlesCat,
    content: "I order you to give me cuddles, hooman.",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "jamesdavis",
    createdAt: "2023-04-26T03:11:37+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "I sniff flowers.",
    likes: {
      likeCount: 59,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "amulyaparab",
    createdAt: "2022-04-30T12:01:22+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/16187713/pexels-photo-16187713/free-photo-of-kitten-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The world looks so smol from up here.",
    likes: {
      likeCount: 43,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "natashaiyer",
    createdAt: "2023-04-12T07:36:59+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    imageUrl:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content:
      "I think that's what humans call a ghost. I am running away in 3...2...1",
    likes: {
      likeCount: 70,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "shubhamsoni",
    createdAt: "2021-11-18T16:26:45+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/2835623/pexels-photo-2835623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Hi there! Can I take a nap in your lap?",
    likes: {
      likeCount: 47,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "amulyaparab",
    createdAt: "2023-03-05T06:49:45+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    imageUrl: napCat,
    content: "I like naps. We'll get along if you don't wake me up.",
    likes: {
      likeCount: 27,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "noahmartinez",
    createdAt: "2022-04-20T10:08:15+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl:
      "https://images.pexels.com/photos/15171881/pexels-photo-15171881/free-photo-of-photo-of-a-tabby-kitten.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Bohemian catto?",
    likes: {
      likeCount: 24,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "ameliasmith",
    createdAt: "2021-10-08T14:33:37+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: dogHuggingCat,
    content: "Come here enemy, gimme a hug.",
    likes: {
      likeCount: 35,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "shubhamsoni",
    createdAt: "2023-01-30T18:59:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: scratchCat,
    content: "Scratchity scratch.",
    likes: {
      likeCount: 42,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "jamesdavis",
    createdAt: "2022-05-17T23:24:22+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imageUrl: chomp,
    content: "Chomp!",
    likes: {
      likeCount: 39,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
        username: "adarshsharma",
        text: "Black Love.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "shubhamsoni",
    createdAt: "2022-12-15T01:17:30+05:30",
    updatedAt: formatDate(),
  },
];
//  {
//     _id: "oakmkzsw_8dj2_w229_kjskl939s",
//     content: "When in doubt, wear black🖤.",
//     imageUrl: blackDress,
//     likes: {
//       likeCount: 49,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     comments: [
//   {
//     _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
//     username: "adarshsharma",
//     text: "Black Love.",
//     votes: {
//       upvotedBy: [],
//       downvotedBy: [],
//     },
//   }
// ],
//     username: "swetaagarwal",
//     createdAt: "2023-06-02T10:38:10+05:30",
//     updatedAt: formatDate(),
//   },
