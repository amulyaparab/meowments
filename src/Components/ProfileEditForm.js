import { useAuth } from "../Contexts/AuthProvider";
import { useUsers } from "../Contexts/UsersProvider";

export const ProfileEditForm = () => {
  const {
    showUserEditForm,
    setShowUserEditForm,
    showAvatarForm,
    setShowAvatarForm,
  } = useUsers();
  const { currentUser } = useAuth();
  return (
    <div className="overlay-parent">
      <div className="overlay">
        <div className="edit-form edit-profile">
          <i
            class="fa-solid fa-circle-xmark cross"
            onClick={() => setShowUserEditForm(false)}
          ></i>
          <h2>Edit Profile</h2>

          <img
            src={currentUser?.avatarUrl}
            alt={currentUser?.username}
            className="edit-profile-image"
          />
          <i
            class="fa-solid fa-pen edit-pen"
            onClick={() => setShowAvatarForm(true)}
          ></i>

          <div className="side-by-side">
            <label>
              First Name
              <input />
            </label>
            <label>
              Last Name
              <input />
            </label>
          </div>
          <label className="bio">
            Bio <textarea />
          </label>

          <label>
            Occupation <input className="full-length" />
          </label>
          <label>
            Website <input className="full-length" />
          </label>

          <div>
            <button>Save</button>
            <button>Discard</button>
          </div>
        </div>
      </div>
    </div>
  );
};
