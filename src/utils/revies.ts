import reviewImg1 from "../assets/reviewImg1.png";
import reviewImg2 from "../assets/reviewImg2.png";
import reviewImg3 from "../assets/reviewImg3.png";
import productImg4 from "../assets/profileImg4.png";
import productImg5 from "../assets/profileImg5.png";
import productImg6 from "../assets/profileImg6.png";

export interface ReviewProps {
  id: string;
  reviewImg: string;
  description: string;
  name: string;
  position: string;
}

export const reviews: ReviewProps[] = [
  {
    id: "1",
    reviewImg: reviewImg1,
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    name: "bella moon",
    position: "product manager",
  },
  {
    id: "2",
    reviewImg: reviewImg2,
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    name: "samuel fortune",
    position: "product designer",
  },
  {
    id: "3",
    reviewImg: reviewImg3,
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    name: "bryce jason",
    position: "product designer",
  },
  {
    id: "4",
    reviewImg: productImg4,
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    name: "james doe",
    position: "software engineer",
  },
  {
    id: "5",
    reviewImg: productImg5,
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    name: "jane doe",
    position: "UI/UX designer",
  },
  {
    id: "6",
    reviewImg: productImg6,
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    name: "Zeus Dev",
    position: "QA analyst",
  },
];
