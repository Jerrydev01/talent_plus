import imgC1 from "../assets/imgc1.png";
import profileImg1 from "../assets/profileImg1.png";
import imgC2 from "../assets/imgc2.png";
import profileImg2 from "../assets/profileImg2.png";
import imgC3 from "../assets/imgc3.png";
import profileImg3 from "../assets/profileImg3.png";
import imgC4 from "../assets/imgc4.png";
import profileImg4 from "../assets/profileImg4.png";
import imgC5 from "../assets/imgc5.png";
import profileImg5 from "../assets/profileImg5.png";
import imgC6 from "../assets/imgc6.png";
import profileImg6 from "../assets/profileImg6.png";

export interface Props {
  id: string;
  category: string;
  title: string;
  img: string;
  profileImg: string;
  profileName: string;
  price: string;
  ratings: string;
  totalRatings: string;
  TimeRanges: string;
  lessons: number;
}

export const categoryData:Props[] = [
  {
    id: "1",
    category: "design",
    title: "introduction to user research in ux design",
    img: imgC1,
    profileImg: profileImg1,
    profileName: "leonard victor",
    price: "$15.00",
    ratings: "4.7k",
    totalRatings: "(32.7k+)",
    TimeRanges: "23hrs 50mins",
    lessons: 15,
  },
  {
    id: "2",
    category: "marketing",
    title: "introduction to  new marketing audience ",
    img: imgC2,
    profileImg: profileImg2,
    profileName: "Jeffrey williams",
    price: "$32.00",
    ratings: "4.7k",
    totalRatings: "(8.7k+)",
    TimeRanges: "22hrs 30mins",
    lessons: 22,
  },
  {
    id: "3",
    category: "development",
    title: "introduction to html, css & bootstrap",
    img: imgC3,
    profileImg: profileImg3,
    profileName: "claretta mason",
    price: "$55.00",
    ratings: "4.7k",
    totalRatings: "(12.7k+)",
    TimeRanges: "45hrs 50mins",
    lessons: 55,
  },
  {
    id: "4",
    category: "development",
    title: "introduction to javascript, git & GitHub",
    img: imgC4,
    profileImg: profileImg4,
    profileName: "Jessica duke",
    price: "$45.00",
    ratings: "4.7k",
    totalRatings: "(32.7k+)",
    TimeRanges: "30hrs 50mins",
    lessons: 55,
  },
  {
    id: "5",
    category: "marketing",
    title: "introduction to outroom  marketing analysis",
    img: imgC5,
    profileImg: profileImg5,
    profileName: "Samuel jacobs",
    price: "$25.00",
    ratings: "4.7k",
    totalRatings: "(4.7k+)",
    TimeRanges: "33hrs 50mins",
    lessons: 26,
  },
  {
    id: "6",
    category: "development",
    title: "introduction to live  marketing analysis",
    img: imgC6,
    profileImg: profileImg6,
    profileName: "adam smith",
    price: "$25.00",
    ratings: "4.7k",
    totalRatings: "(15.7k+)",
    TimeRanges: "10hrs 50mins",
    lessons: 32,
  },
];
