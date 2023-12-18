import { FC } from "react";
import "./card.css";
import Link from "next/link";

interface prop {
  url?: string;
  backgroundImage?: string;
  heroImage?: string;
}

export const HeroCard: FC<prop> = ({
  url = "\\",
  backgroundImage,
  heroImage,
}) => {
  return (
    <Link href={url}>
      <div className="card">
        <div className="wrapper">
          <img src={backgroundImage} className="cover-image" />
        </div>

        <img src={heroImage} className="character" />
      </div>
    </Link>
  );
};
