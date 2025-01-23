import { CardComponent } from "./components/CardCM";
import { CatalogComponent } from "./styles";
import { useEffect, useState } from "react";
import { cardModel } from "./components/model";
// import { cardImageFull } from "./components/model";

function App() {
  const [modal, setModal] = useState(false);
  const [DataModal, setDataModal] = useState();

  useEffect(() => {
    if (DataModal) {
      setModal(true);
    }
  }, [DataModal]);

  function unsetModal() {
    if (modal) {
      setModal(false);
      setDataModal(null);
    } else {
      setModal(true);
    }
  }

  // async function handleModal(cardData: cardModel) {}
  return (
    <CatalogComponent>
      {modal && (
        <>
          <div onClick={() => unsetModal()} className="fundo" />
          <div className="modal">
            <img className="modal-img" src={DataModal} />s
          </div>
        </>
      )}
      <div className="container">
        <div className="text">
          <h1>Be Inovation Catalog</h1>
          <p>TEMAS</p>
        </div>
        <div className="catalog">
          {cardModel.map((card) => (
            <li key={card.name} onClick={() => setDataModal(card.imageFull)}>
              <CardComponent name={card.name} image={card.image} />
            </li>
          ))}
        </div>
      </div>
    </CatalogComponent>
  );
}

export default App;
