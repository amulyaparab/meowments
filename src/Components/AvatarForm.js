import { avatarArray } from ".";
import { useUsers } from "../Contexts/UsersProvider";
import { useUtils } from "../Contexts/UtilsProvider";

export const AvatarForm = () => {
  const { setShowAvatarForm, userDispatch } = useUsers();
  const { isDarkMode } = useUtils();
  const profileImageHandler = (e) => {
    const image = e.target.files[0];
    const imageURL = URL.createObjectURL(image);
    userDispatch({ type: "EDIT_AVATAR", payload: imageURL });
    setShowAvatarForm(false);
  };

  //   const imageUploadHandler = (event) => {
  //   const file = event.target.files[0];
  //   const imageURL = URL.createObjectURL(file);
  //   setImageURL(imageURL);
  //   postDispatch({
  //     type: "NEW_POST_IMG",
  //     payload: imageURL,
  //   });
  // };
  // const imageRevoker = () => {
  //   URL.revokeObjectURL(imageURL);
  //   postDispatch({
  //     type: "NEW_POST_REMOVE_IMG",
  //     payload: null,
  //   });
  //   setImageURL(null);
  // };
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
          <label className="upload-image">
            Upload Image
            <input
              type="file"
              accept="/image*"
              className="hidden"
              onChange={profileImageHandler}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
