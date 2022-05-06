import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function Spinner() {
  return (
    <>
      <div
        id="cover-loading"
        className="w-screen h-screen absolute top-0 left-0 z-30"
      />
      <div className="text-gray-50 flex flex-row flex-nowrap justify-center items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">
        <FontAwesomeIcon icon={faGamepad} id="spinner" />
        <h2 className="ml-1">Please wait...</h2>
      </div>
    </>
  );
}

export default Spinner;
