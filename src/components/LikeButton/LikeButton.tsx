import style from "./LikeButton.module.css";

type LikeButtonProps = {
  clickHandler: (isLiked: boolean) => void;
  isLiked: boolean;
};

const LikeButton = ({ clickHandler, isLiked }: LikeButtonProps) => {
  return (
    <div
      className={isLiked ? style.liked : style.notLiked}
      onClick={(event) => {
        event.preventDefault();
        clickHandler(!isLiked);
      }}
    >
      <LikeSvg />
    </div>
  );
};

const LikeSvg = () => {
  return (
    <svg viewBox="-25 -25 510 500" xmlSpace="preserve">
      <path
        d="M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706 c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953 C-54.844,154.658,26.437,351.092,237.376,436.245z"
        strokeWidth={20}
      />
    </svg>
  );
};
export default LikeButton;
