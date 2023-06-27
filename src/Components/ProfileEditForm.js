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
          <h1>Edit Profile</h1>
          <img src={currentUser?.avatarUrl} alt={currentUser?.username} />
          <i
            class="fa-solid fa-pen"
            onClick={() => setShowAvatarForm(true)}
          ></i>
          <div>
            <label>
              First Name
              <input />
            </label>
            <label>
              Last Name
              <input />
            </label>
          </div>
          <label>
            Bio <textarea />
          </label>
          <label>
            Occupation <input />
          </label>
          <label>
            Website <input />
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
