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
import { useUsers } from "../Contexts/UsersProvider";

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
  const { showAvatarForm, setShowAvatarForm } = useUsers();
  return (
    <div className="overlay-parent">
      <div className="overlay">
        <div className="avatar-form">
          <i
            class="fa-solid fa-circle-xmark cross"
            onClick={() => setShowAvatarForm(false)}
          ></i>
          {avatarArray.map((cat) => (
            <img src={cat} alt="cat" />
          ))}
        </div>
      </div>
    </div>
  );
};
