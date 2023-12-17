import { FC } from "react";
import "./card.css";

interface prop {
  url?: string;
  backgroundImage?: string;
  heroImage?: string;
}

export const HeroCard: FC = () => {
  return (
    <a href="https://www.mythrillfiction.com/the-dark-rider" target="_blank">
      <div className="card">
        <div className="wrapper">
          <img src="/card/back__.png" className="cover-image" />
        </div>

        <img src="/card/13 (4).png" className="character" />
      </div>
    </a>
  );
};
