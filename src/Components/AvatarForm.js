import {
  beigeCat,
  blackAndWhiteCat,
  blackCat,
  blueCat,
  blueEyedCat,
  differentEyesCat,
  grumpyCat,
  hazelEyedCat,
  kitten,
  mainCat,
  orangeKitten,
  siameseCat,
} from ".";

export const AvatarForm = () => {
  const avatarArray = [
    beigeCat,
    blackAndWhiteCat,
    blackCat,
    blueCat,
    blueEyedCat,
    differentEyesCat,
    grumpyCat,
    hazelEyedCat,
    kitten,
    mainCat,
    orangeKitten,
    siameseCat,
  ];
  return (
    <div className="overlay-parent">
      <div className="overlay">
        <div className="avatar-form">
          {avatarArray.map((cat) => (
            <img src={cat} alt="cat" />
          ))}
        </div>
      </div>
    </div>
  );
};
