import React from "react";
import "./Business.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Business = () => {
  return (
    <div className="business">
      <div className="container">
        <div className="left">
          <h1>
            fiverr business. <span>NOUVEAU</span>
          </h1>
          <h2>
            Une solution business conçue pour les <span>équipes.</span>
          </h2>
          <p>
            Profitez d'une expérience unique, dédiée aux entreprises, pleine
            d'avantages et de nouveaux outils.
          </p>
          <div className="card-list">
            <div className="list">
              <CheckCircleOutlineIcon className="icons" />
              <span>
                Mettez-vous en relation avec des freelances ayant une expérience
                confirmée dans le domaine des affaires.
              </span>
            </div>
            <div className="list">
              <CheckCircleOutlineIcon className="icons" />
              <span>
                Rencontrez le talent parfait par l'intermédiaire d'un
                responsable de la réussite client.
              </span>
            </div>
            <div className="list">
              <CheckCircleOutlineIcon className="icons" />
              <span>
                Gérez le travail d'équipe et boostez votre productivité grâce à
                un espace de travail unique.
              </span>
            </div>
          </div>
          <button>Découvrir Fiverr Business</button>
        </div>
        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
