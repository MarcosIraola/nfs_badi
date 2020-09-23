import React from 'react';
import styles from "./roomCard.module.css";

const RoomCard = ({name, description, price}) => {

    return (
      <div className={styles.__contenedorRoomCard}>
          <img className={styles.__galeria} src='https://www.metropoliabierta.com/uploads/s1/76/18/0/Foto%20Habitacio%CC%81n_5_570x340.jpeg' alt='Room in Barcelona'/>
          <span className={styles.__nombre}>Marcos, 27</span>
          <span className={styles.__titulo}>{name}</span>
          <span className={styles.__precio}>{price} €/mes</span>
      </div>
    );
}

export default RoomCard;