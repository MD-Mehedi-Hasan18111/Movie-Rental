/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImgUrl } from "../../../utils/cine-utility";
import Rating from "./Rating";
import CinemaDetailsModal from "./CinemaDetailsModal";
import { CinemaCartContext } from "../../../context/CinemaContext";
import { toast } from "react-toastify";

const CinemaCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const { state, dispatch } = useContext(CinemaCartContext);

  const handleAddToCartMovie = (e, movie) => {
    e.stopPropagation();

    const foundMovie = state?.cart?.find((item) => item?.id === movie?.id);

    if (!foundMovie) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`The movie ${movie?.title} added to cart successfully!`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`The movie ${movie?.title} has been already added to cart!`, {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      {showModal && (
        <CinemaDetailsModal
          movie={movie}
          onCloseModal={setShowModal}
          onAddMovie={handleAddToCartMovie}
        />
      )}
      <figure
        key={movie?.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        onClick={() => setShowModal(true)}
      >
        <img
          className="h-[300px] w-full object-cover"
          src={getImgUrl(movie?.cover)}
          alt={movie?.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie?.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie?.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating rating={movie?.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e) => handleAddToCartMovie(e, movie)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie?.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default CinemaCard;
