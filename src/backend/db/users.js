import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { adarsh, amelia, amulya, james, natasha, noah, shubham } from ".";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    avatarUrl: amulya,
    firstName: "Amulya",
    lastName: "Parab",
    username: "amulyaparab",
    password: "amy123",
    createdAt: "2020-09-15T08:20:45+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatarUrl: amelia,
    firstName: "Amelia",
    lastName: "Smith",
    username: "ameliasmith",
    password: "ameliasmith123",
    createdAt: "2020-11-18T16:26:45+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatarUrl: adarsh,
    firstName: "Adarsh",
    lastName: "Sharma",
    username: "adarshsharma",
    password: "adarshsharma123",
    createdAt: "2019-12-15T01:17:30+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatarUrl: shubham,
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    createdAt: "2018-06-07T20:52:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatarUrl: james,
    firstName: "James",
    lastName: "Davis",
    username: "jamesdavis",
    password: "jamesdavis123",
    createdAt: "2020-11-18T16:26:45+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatarUrl: natasha,
    firstName: "Natasha",
    lastName: "Iyer",
    username: "natashaiyer",
    password: "natashaiyer123",
    createdAt: "2019-11-28T19:05:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatarUrl: noah,
    firstName: "Noah",
    lastName: "Martinez",
    username: "noahmartinez",
    password: "noahmartinez123",
    createdAt: "2020-10-08T14:33:37+05:30",
    updatedAt: formatDate(),
  },
];
//  {
//     _id: "shuhej3_8u3j_ijei3nkdi",
//     firstName: "Scott",
//     lastName: "Ward",
//     username: "scottward",
//     password: "ward2022",
//     bio: "Wev Developer",
//     avatarUrl: boyAvatar3,
//     website: "",
//     createdAt: "2021-11-07T10:01:23+05:30",
//     updatedAt: formatDate(),
//   },
