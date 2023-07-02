import { usePost } from "../../Contexts/PostsProvider";
import { useAuth } from "../../Contexts/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../Contexts/UsersProvider";

export const CreatePost = () => {
  const { setEditForm } = usePost();
  const { currentUser } = useAuth();
  const { state: userState } = useUsers();
  const navigate = useNavigate();
  const findCurrUser = userState.users.find(
    (user) => user._id === currentUser._id
  );
  return (
    <>
      {/* <div className="new-post">
        <div className="new-post-div">
          <img
            className="avatar"
            src={findCurrUser?.avatarUrl}
            alt={findCurrUser?.username}
            onClick={() => navigate(`/profile/${currentUser?._id}`)}
          />
          <button
            placeholder="Share your meowment"
            onClick={() => setEditForm(true)}
          >
            Share your meowment!
          </button>
        </div>
      </div> */}
    </>
  );
};
