import "./LikeButton.css";

type LikeButtonProps = {
  clickHandler: (isLiked: boolean) => void;
  isLiked: boolean;
};

const LikeButton = ({ clickHandler, isLiked }: LikeButtonProps) => {
  return (
    <div
      className="like-button"
      onClick={(event) => {
        event.preventDefault();
        clickHandler(!isLiked);
      }}
    >
      <LikeSvg isLiked={isLiked} />
    </div>
  );
};

type LikeSvgProps = {
  isLiked: boolean;
};

const LikeSvg = ({ isLiked = false }: LikeSvgProps) => {
  return (
    <svg viewBox="-25 -25 510 500" xmlSpace="preserve">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706 c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953 C-54.844,154.658,26.437,351.092,237.376,436.245z"
          fill={isLiked ? "red" : "white"}
          stroke="black"
          strokeWidth="20"
        />
      </g>
    </svg>
  );
};

export default LikeButton;
