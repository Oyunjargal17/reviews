"use client";
import { useState } from "react";
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <ReviewList />
    </div>
  );
}
const reviews = [
  {
    id: 1,
    image: "https://course-api.com/images/people/person-1.jpeg",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    image: "https://course-api.com/images/people/person-2.jpeg",
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    image: "https://course-api.com/images/people/person-3.jpeg",
    name: "Peter Jones",
    job: "INTERN",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    image: "https://course-api.com/images/people/person-4.jpeg",
    name: "Bill Anderson",
    job: "THE BOSS",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
];

const ReviewList = () => {
  const [index, setIndex] = useState(0);
  const prevPerson = () => {
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
  };
  const nextPerson = () => {
    setIndex(index === reviews.length - 1 ? 0 : index + 1);
  };
  const randomPerson = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };
  return (
    <div className="bg-white w-150 p-6 rounded-2xl flex flex-col justify-center items-center shadow-lg">
      <div>
        <ReviewListItem
          key={reviews[index].id}
          id={reviews[index].id}
          image={reviews[index].image}
          name={reviews[index].name}
          job={reviews[index].job}
          text={reviews[index].text}
        />
      </div>
      <div className="flex gap-3">
        <button onClick={prevPerson} className="text-[#3c379a] text-4xl">
          «
        </button>
        <button onClick={nextPerson} className="text-[#3c379a] text-4xl">
          »
        </button>
      </div>
      <div>
        <button
          onClick={randomPerson}
          className="bg-[#c0beff] text-[#665fff] text-[12px] rounded-sm p-1 mt-2 w-[100px]"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

const ReviewListItem = ({ id, image, name, job, text }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative inline-block">
          <div className="absolute -top-2 -right-2 w-30 h-30 rounded-full border-[12px] border-[#645dff]"></div>
          <img
            className=" w-30 h-30 rounded-full object-cover relative z-10 "
            src={image}
            alt="profile"
          />
          <div className="absolute top-2 left-1 bg-[#645dff] w-8 h-8 rounded-full flex justify-center items-center text-white text-2xl z-20 shadow-lg">
            ❞
          </div>
        </div>

        <h1 className="font-semibold text-2xl text-[#0e172a] mt-[10px]">
          {name}
        </h1>
        <p className="text-[#756fff] text-lg font-medium p-1">{job}</p>
        <p className="text-center text-base p-3 text-[#485468]">{text}</p>
      </div>
    </div>
  );
};

// const ReviewList = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const nextPerson = () => {
//     setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
//   };

//   const prevPerson = () => {
//     setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
//   };
//   const randomPerson = () => {
//     setCurrentIndex(Math.floor(Math.random() * reviews.length));
//   };
//   return (
//     <div>
//       <ReviewListItem
//         key={reviews[currentIndex].id}
//         id={reviews[currentIndex].id}
//         name={reviews[currentIndex].name}
//         image={reviews[currentIndex].image}
//         job={reviews[currentIndex].job}
//         text={reviews[currentIndex].text}
//       />
//       <button onClick={prevPerson}>prev</button>
//       <button onClick={nextPerson}>next</button>
//       <button onClick={randomPerson}>random</button>
//     </div>
//   );

//   // const [reviewList, setReviesList] = useState(reviews);
//   // return (
//   //   <div>
//   //     {reviewList.map((review) => (
//   //       <ReviewListItem
//   //         key={review.id}
//   //         id={review.id}
//   //         name={review.name}
//   //         image={review.image}
//   //         job={review.job}
//   //         text={review.text}
//   //       />
//   //     ))}
//   //   </div>
//   // );
// };

// const ReviewListItem = ({ id, image, name, job, text }) => {
//   return (
//     <div>
//       <img
//         className="w-[150px] h-[150px] rounded-full"
//         src={image}
//         alt="profile"
//       />
//       <h1>{job}</h1>
//       <p>{text}</p>
//     </div>
//   );
// };
