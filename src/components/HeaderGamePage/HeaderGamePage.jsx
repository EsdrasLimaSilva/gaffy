import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

function HeaderGamePage() {
  const navigate = useNavigate();

  return (
    <header id="header-game-page" className="h-40 f text-pink-200 ">
      <div className="flex flex-row items-center p-2">
        <h2 className="p-1  text-xl">GAFFY</h2>
        <button onClick={() => navigate("/", { replace: true })}>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="text-lg" />
        </button>
      </div>
    </header>
  );
}

export default HeaderGamePage;
