import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { BiSolidStar } from "react-icons/bi";
import "./CtImage.css";
const cards = [
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/20562643/1446ccbeb9d1dcbc06337cb8d7d7228a.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Babylon Bar And Kitchen",
    rating1: "4.4",
    rating2: "-",
    p1: "Asian,Sushi,Chinese,Italian,Biryani,..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/9/18725609/6be66a9b53b7348cd6723824a86ba084.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Carpe Diem",
    rating1: "4.3",
    rating2: "-",
    p1: "Continental,North Indian,Oriental,Fast..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/6/19569796/02a610e5b1a2dd4cff57c739ed5732da.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Frat House",
    rating1: "4.2",
    rating2: "-",
    p1: "Continental,Asian,Chinese,North Indian..",
    p2: "SLN Terminus,Gachibowli,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/2/19878202/df46a5331118d224b61b76e32fd40d73.jpeg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Forge Breu - Hous",
    rating1: "4.4",
    rating2: "-",
    p1: "Finger Food,Continental,North Indian,It..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/8/93598/c65a43af91a939e987d9665aacf295d8.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Fusion 9",
    rating1: "4.2",
    rating2: "4.1",
    p1: "Continental,Italian,Oriental,Biryani,Nor..",
    p2: "Inorbit Mall,Hitech City,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/5/18716525/dc74596e138ec1fe6d988dbfd35190c1.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Aura Cafe & Infusion Bar",
    rating1: "4.5",
    rating2: "4.2",
    p1: "Continental,Italian,Chinese,Fast Food,..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/4/20670174/0cbdfcf64fa62377b9e28a6846c95e18.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Lord Of The Drinks",
    rating1: "4.4",
    rating2: "-",
    p1: "North Indian,Asian,Desserts,Sushi,Itali...",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/chains/0/18459130/ef81a88ecefef47d11dd0b8f64f87772.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Fat Pigeon - Bar Hop",
    rating1: "4.4",
    rating2: "4.0",
    p1: "Bar Food,Continental,North Indian,Italia..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/8/96748/4f3901b9c597156bb62219cb3325cafe.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Komatoes",
    rating1: "4.4",
    rating2: "4.0",
    p1: "North Indian,Chinese,Japanese,Shushi,..",
    p2: "Fairfield by Marriot,Gachibowli,Hyderab..",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/4/19630684/cfadcec43705b17ff7cdefb845204701.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Cock & Bull",
    rating1: "4.8",
    rating2: "3.2",
    p1: "Italian,Mediterranean,British,Continenta..",
    p2: "The Skyview,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18896473/c18787b546c726c114dfbcc4540e1feb.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Mub Brick Kitchen And Bar",
    rating1: "4.3",
    rating2: "4.0",
    p1: "North Indian,Fast Food,Oriental,Contin..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/5/18607685/1767d92bf9948af55959ac34db955d32.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Farzi Cafe",
    rating1: "4.6",
    rating2: "4.2",
    p1: "Modern Indian,Mexican,De..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/9/18356469/3cdc770907a9b3ffde2de91a0d6198a0.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Prost",
    rating1: "4.5",
    rating2: "-",
    p1: "Continental,Pasta,Fast Food,Pizza,Bur...",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/2/19873462/dacfdd1560ddb2ca2405f8c0318875c5.jpeg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Zero40 Brewing",
    rating1: "4.2",
    rating2: "-",
    p1: "American,Pizza,North Indian,Fast Food...",
    p2: "Gachibowli,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/4/19899034/249c202eabf7fe046b80a8ebc0006251.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Elsewhere Lounge & Kitchen",
    rating1: "4.2",
    rating2: "-",
    p1: "North Indian,Mughlai,Continental,Pizza,...",
    p2: "Gachibowli,Hyderabad",
  },
];
function CtImage() {
  return (
    <div className="cardImg">
      {cards.map((x) => {
        return (
          <div className="mainbarimg">
            <img src={x.image} alt="" />
            <p className="bartitle">{x.title}</p>
            {/* <div className="rating"> */}
            <button className="rating1">
              {x.rating1}
              <BiSolidStar color="white"></BiSolidStar>
            </button>
            <span>DINING</span>
            <span>
              <button className="rating2">
                {x.rating2}
                <FaRegStar></FaRegStar>
              </button>
            </span>
            <span>DELIVERY</span>
            {/* </div> */}
            <p className="p1">{x.p1}</p>
            <p className="p2">{x.p2}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CtImage;
