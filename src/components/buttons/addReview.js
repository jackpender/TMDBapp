import React from "react";
import { Link } from "react-router-dom";

const ReviewButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default ReviewButton;

// import React from "react";

// const AddReviewButton = () => {
//   return (
//     <button
//       type="button"
//       className="btn w-100 btn-primary"
//     >
//       Write a Review
//     </button>
//   );
// };

// export default AddReviewButton;