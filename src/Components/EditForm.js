import { usePost } from "../Contexts/PostsProvider";

export const EditForm = ({ content, image, id }) => {
  const { state, setEditForm } = usePost();
  const findPostToBeEdited = state.feedPosts.find((post) => post._id === id);
  console.log(findPostToBeEdited);
  return (
    <div className="overlay">
      <div className="edit-form">
        <i
          class="fa-solid fa-circle-xmark cross"
          onClick={() => setEditForm(false)}
        ></i>
        <img src={image} alt="edit-post" className="edit-post-img" />
        <label>
          <textarea value={content}></textarea>
        </label>
        <div className="edit-buttons">
          <button>Save</button>
          <button>Discard Changes</button>
        </div>
      </div>
    </div>
  );
};
