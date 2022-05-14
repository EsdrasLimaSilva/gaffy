import React from "react";
import formatDescription from "../../helpers/formatDescription";

function GameDescription({ data }) {
  formatDescription(data.description);
  return (
    <>
      <div className="flex flex-col justify-center items-center text-gray-50 mb-10 mt-5">
        <img
          src={data.thumbnail}
          alt={`${data.title} thumbnail`}
          className="rounded-md shadow-lg"
        />
        <h2 className="text-xl text-center mt-3">{data.title}</h2>
        <span className="bg-gray-50 text-gray-900 font-bold text-xs ml-3 px-1 rounded-md">
          {data.genre}
        </span>
        <div className="text-xs mt-5 mr-auto">
          <p>Publisher: {data.publisher}</p>
          <p>Developer: {data.developer}</p>
          <p>Platform: {data.platform}</p>
        </div>
      </div>
      <div className="text-gray-50">
        {formatDescription(data.description).map((el, i) => (
          <p key={i} className="my-5 text-justify leading-7 text-sm font-sans">
            {el}
          </p>
        ))}
      </div>
    </>
  );
}

export default GameDescription;
