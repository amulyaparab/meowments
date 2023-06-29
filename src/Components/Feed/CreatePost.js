import { usePost } from "../../Contexts/PostsProvider";
import { useUtils } from "../../Contexts/UtilsProvider";
import { useAuth } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../Contexts/UsersProvider";
import blueCat from "../../assets/AvatarImages/blueCat.jpg";
export const CreatePost = () => {
  // const { user } = useUtils();
  const { state, postDispatch, createPost, fetchUserFeedPosts, setEditForm } =
    usePost();
  const { currentUser } = useAuth();
  const { state: userState } = useUsers();
  const handleShowToast = () => {
    toast.success("Toast message!", { position: toast.POSITION.TOP_RIGHT });
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="new-post">
        <div className="new-post-div">
          <img
            className="avatar"
            src={
              currentUser?.avatarUrl?.length ? currentUser?.avatarUrl : blueCat
            }
            alt={currentUser?.username}
            onClick={() => navigate(`/profile/${currentUser?._id}`)}
          />

          <button
            placeholder="Share your meowment"
            // onChange={(event) =>
            //   postDispatch({
            //     type: "POST_CONTENT",
            //     payload: event.target.value,
            //   })
            // }
            onClick={() => setEditForm(true)}
          >
            Share your meowment!
          </button>
        </div>
        {/* <button
          onClick={() => {
            createPost();
          }}
        >
          Post
        </button> */}
        {/* <label><input type="file" /></label> */}

        {/* <button onClick={handleShowToast}>Show Toast</button> */}
      </div>
    </>
  );
};
