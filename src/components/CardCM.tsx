import { CardComponent as CardContainer } from "./stylesCard";

type Props = {
  name: string;
  image: string;
};

export function CardComponent({ name, image }: Props) {
  return (
    <CardContainer className="card" style={{ width: "25rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </CardContainer>
  );
}
