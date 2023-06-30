import { avatarArray } from ".";
import { useUsers } from "../Contexts/UsersProvider";
import { useUtils } from "../Contexts/UtilsProvider";

export const AvatarForm = () => {
  const { showAvatarForm, setShowAvatarForm, userDispatch } = useUsers();
  const { isDarkMode } = useUtils();
  return (
    <div className="overlay-parent" id={`${isDarkMode && "dark-text"}`}>
      <div className="overlay">
        <div className="avatar-form">
          <i
            class="fa-solid fa-circle-xmark cross"
            onClick={() => setShowAvatarForm(false)}
          ></i>
          {avatarArray.map((cat) => (
            <img
              src={cat}
              alt="cat"
              onClick={() => {
                userDispatch({ type: "EDIT_AVATAR", payload: cat });
                setShowAvatarForm(false);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
