import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Flipped } from "react-flip-toolkit";

const OptionCard = ({ id, displayName, photoURL, voted }) => {
  return (
    <Flipped flipId={id} stagger>
      <div
        className={classnames(
          "bg-white border-2 h-full flex items-center px-4 py-2 rounded sm:flex-col space-x-4 space-y-0 sm:space-x-0 sm:space-y-2 w-full",
          { "border-green-400": voted }
        )}
      >
        <img
          src={photoURL}
          alt={displayName}
          className="h-12 rounded-full w-12"
        />
        <figcaption className="font-semibold text-lg">{displayName}</figcaption>
      </div>
    </Flipped>
  );
};

OptionCard.propTypes = {
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  voted: PropTypes.bool,
};

OptionCard.defaultProps = {
  voted: false,
};

export default OptionCard;
