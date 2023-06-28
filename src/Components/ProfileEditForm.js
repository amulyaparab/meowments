import { useAuth } from "../Contexts/AuthProvider";
import { useUsers } from "../Contexts/UsersProvider";
import { editUser } from "../Services/userServices";

export const ProfileEditForm = () => {
  const { setShowUserEditForm, setShowAvatarForm, userDispatch, state } =
    useUsers();
  const { currentUser, currentToken } = useAuth();
  console.log(state, "all users and stuffffffffff");
  const editProfileHandler = async () => {
    try {
      const editUserProfile = await editUser(
        state?.currentUserData,
        currentToken
      );
      console.log(editUserProfile, "amulya");
      userDispatch({ type: "EDIT_USER", payload: editUserProfile });
    } catch (err) {
      console.log(err);
    } finally {
      setShowUserEditForm(false);
    }
  };
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
              <input
                value={state?.currentUserData?.firstName}
                onChange={(event) =>
                  userDispatch({
                    type: "EDIT_FNAME",
                    payload: event.target.value,
                  })
                }
              />
            </label>
            <label>
              Last Name
              <input
                value={state?.currentUserData?.lastName}
                onChange={(event) =>
                  userDispatch({
                    type: "EDIT_LNAME",
                    payload: event.target.value,
                  })
                }
              />
            </label>
          </div>
          <label className="bio">
            Bio{" "}
            <textarea
              value={state?.currentUserData?.bio}
              onChange={(event) =>
                userDispatch({
                  type: "EDIT_BIO",
                  payload: event.target.value,
                })
              }
            />
          </label>

          <label>
            Occupation{" "}
            <input
              value={state?.currentUserData?.occupation}
              className="full-length"
              onChange={(event) =>
                userDispatch({
                  type: "EDIT_JOB",
                  payload: event.target.value,
                })
              }
            />
          </label>
          <label>
            Website{" "}
            <input
              type="url"
              value={state?.currentUserData?.website}
              className="full-length"
              onChange={(event) =>
                userDispatch({
                  type: "EDIT_WEBSITE",
                  payload: event.target.value,
                })
              }
            />
          </label>

          <div>
            <button onClick={() => editProfileHandler()}>Save</button>
            <button>Discard</button>
          </div>
        </div>
      </div>
    </div>
  );
};
