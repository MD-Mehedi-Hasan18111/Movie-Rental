/* eslint-disable react/prop-types */
import Star from "../../../assets/star.svg";

const Rating = ({ rating }) => {
  const stars = Array(rating).fill(Star);

  return (
    <>
      {stars?.map((star, index) => {
        return <img key={index} src={star} width="14" height="14" alt="" />;
      })}
    </>
  );
};

export default Rating;
