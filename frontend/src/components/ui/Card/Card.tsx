import "./Card.css";

import type { CardProps, CardSectionProps } from "./types";

function Header({ children }: CardSectionProps) {
  return <div className="card__header">{children}</div>;
}

function Body({ children }: CardSectionProps) {
  return <div className="card__body">{children}</div>;
}

function Footer({ children }: CardSectionProps) {
  return <div className="card__footer">{children}</div>;
}

function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;