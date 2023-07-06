import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";
import { editPost } from "../Services/postServices";
import { toast } from "react-toastify";
import { useAuth, usePost, useUtils } from "../Contexts";
export const EditForm = () => {
  const { state, setEditForm, postDispatch, createPost } = usePost();
  const findPostToBeEdited = state.posts?.find(
    (post) => post?._id === state.post?._id
  );

  const { currentToken } = useAuth();
  const { position } = useUtils();
  const editPostHandler = async () => {
    try {
      const edited = await editPost(state.post._id, state.post, currentToken);
      postDispatch({ type: "EDITED_POST", payload: edited });
    } catch (err) {
      console.log(err);
    } finally {
      postDispatch({ type: "CLEAR_FORM" });
      setEditForm(false);
      toast.success("Post Edited.", position);
    }
  };
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imageURL, setImageURL] = useState(state.post.imageUrl);
  const imageUploadHandler = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
    postDispatch({
      type: "NEW_POST_IMG",
      payload: imageURL,
    });
  };
  const imageRevoker = () => {
    URL.revokeObjectURL(imageURL);
    postDispatch({
      type: "NEW_POST_REMOVE_IMG",
      payload: null,
    });
    setImageURL(null);
  };
  return (
    <div className="overlay-parent">
      <div className="overlay">
        <div className="edit-form">
          <i
            className="fa-solid fa-circle-xmark cross"
            onClick={() => {
              setEditForm(false);
              postDispatch({ type: "CLEAR_FORM" });
            }}
          ></i>
          {findPostToBeEdited ? <h1>Edit Post</h1> : <h1>Create Post</h1>}
          {imageURL && (
            <div className="relative">
              <i
                className="fa-solid fa-xmark cross x-mark"
                onClick={imageRevoker}
              ></i>
              <img
                src={state?.post?.imageUrl || imageURL}
                alt="edit-post"
                className="edit-post-img"
              />
            </div>
          )}
          <label>
            <textarea
              value={state?.post?.content}
              onChange={(event) =>
                postDispatch({
                  type: "POST_CONTENT",
                  payload: event.target.value,
                })
              }
              placeholder="Scratch down a meowment here."
            ></textarea>
          </label>

          <div className="edit-buttons">
            <i
              className="fa-solid fa-face-smile add-on"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            ></i>
            <label>
              <i className="fa-solid fa-image add-on"></i>
              <input
                className="hidden"
                type="file"
                accept="/image*"
                onChange={imageUploadHandler}
              />
            </label>
            {showEmojiPicker && (
              <Picker
                className="picker"
                data={data}
                onEmojiSelect={(event) => {
                  postDispatch({
                    type: "ADD_EMOJI_CONTENT",
                    payload: event.native,
                  });
                  setShowEmojiPicker(false);
                }}
              />
            )}
            {findPostToBeEdited ? (
              <button onClick={editPostHandler}>Save</button>
            ) : (
              <button
                onClick={createPost}
                disabled={
                  !state?.post?.content?.length &&
                  !state?.post?.imageUrl?.length
                }
              >
                Post
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
