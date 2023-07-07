import { toast } from "react-toastify";
import { useAuth, useUsers, useUtils } from "../../Contexts";
import { editUser } from "../../Services/userServices";

export const ProfileEditForm = () => {
  const { setShowUserEditForm, setShowAvatarForm, userDispatch, state } =
    useUsers();
  const { currentUser, currentToken } = useAuth();
  const { isDarkMode, position } = useUtils();

  const editProfileHandler = async () => {
    try {
      const editUserProfile = await editUser(
        state?.currentUserData,
        currentToken
      );
      userDispatch({ type: "EDIT_USER", payload: editUserProfile });
    } catch (err) {
      console.error(err);
    } finally {
      setShowUserEditForm(false);
      toast.success("Profile Edited.", position);
    }
  };

  return (
    <div className="overlay-parent" id={`${isDarkMode && "dark-text"}`}>
      <div className="overlay">
        <div className="edit-form edit-profile">
          <i
            className="fa-solid fa-circle-xmark cross"
            onClick={() => setShowUserEditForm(false)}
          ></i>
          <h2>Edit Profile</h2>

          <img
            src={state?.currentUserData?.avatarUrl}
            alt={currentUser?.username}
            className="edit-profile-image"
          />
          <i
            className="fa-solid fa-pen edit-pen"
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
            <button onClick={editProfileHandler}>Save</button>
            <button
              onClick={() =>
                userDispatch({
                  type: "DISCARD_CHANGES",
                  payload: currentUser,
                })
              }
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
