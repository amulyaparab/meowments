import "./profile.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPostsByUser } from "../../Services/postServices";
import {
  AvatarForm,
  FollowButton,
  Loader,
  PostCard,
  ProfileEditForm,
  SideNav,
  Suggestions,
} from "../../Components";
import { useAuth, usePost, useUsers, useUtils } from "../../Contexts";

export const Profile = () => {
  const { userId } = useParams();
  const { showUserEditForm, setShowUserEditForm, showAvatarForm, state } =
    useUsers();
  const { state: userPostsState, postDispatch } = usePost();
  const { currentUser } = useAuth();
  const { logout, isDarkMode } = useUtils();

  const findUser = state.users.find((user) => user._id === userId);
  const isFoundUserSameAsCurrentUser = findUser?._id === currentUser?._id;

  const formattedDate = new Date(findUser?.createdAt);
  const date = formattedDate.getDate();
  const month = formattedDate.toLocaleString("default", {
    month: "long",
  });
  const year = formattedDate.getFullYear();

  const fetchUserPosts = async () => {
    try {
      const postsByUser = await getPostsByUser(findUser?.username);
      postDispatch({ type: "UPDATE_USER_POSTS", payload: postsByUser });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, [findUser, userPostsState.posts]);

  return (
    <div className="page-fractions" id={`${isDarkMode && "dark"}`}>
      <SideNav />
      <div>
        {userPostsState.loading ? (
          <Loader />
        ) : (
          <div className="profile-parent">
            <div className="profile" id={`${isDarkMode && "dark"}`}>
              <div>
                <div className="profile-deets">
                  <img
                    src={findUser?.avatarUrl}
                    className="profile-image"
                    alt={findUser?.username}
                  />

                  <div>
                    <h3>
                      {findUser?.firstName} {findUser?.lastName}
                    </h3>
                    <p className="profile-username">@{findUser?.username}</p>
                    {findUser?.bio?.length && (
                      <p>
                        <i className="fa-solid fa-paw"></i>
                        {findUser?.bio}
                      </p>
                    )}
                    {findUser?.website?.length && (
                      <div>
                        <i className="fa-solid fa-display"></i>
                        <a
                          href={findUser?.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Portfolio website
                        </a>
                      </div>
                    )}
                    {findUser?.occupation?.length && (
                      <p>
                        {" "}
                        <i className="fa-solid fa-user"></i>
                        {findUser?.occupation}
                      </p>
                    )}
                    <p>
                      <i className="fa-regular fa-calendar"></i>
                      {`Joined on ${date}
                ${month}
                ${year}`}
                    </p>
                    {isFoundUserSameAsCurrentUser && (
                      <button
                        onClick={() => setShowUserEditForm(true)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                    )}
                    {isFoundUserSameAsCurrentUser && (
                      <i
                        className="fa-solid fa-right-from-bracket logout-icon"
                        id={`${isDarkMode && "light-text"}`}
                        onClick={logout}
                      ></i>
                    )}
                    {!isFoundUserSameAsCurrentUser && (
                      <div className="suggestions profile-follow">
                        <FollowButton user={findUser} />
                      </div>
                    )}
                  </div>
                </div>
                {showUserEditForm && <ProfileEditForm />}
                {showAvatarForm && (
                  <AvatarForm id={`${isDarkMode && "dark-text"}`} />
                )}
                <div className="profile-tabs" id={`${isDarkMode && "dark"}`}>
                  <div>
                    <h4>{findUser?.following?.length}</h4>
                    <h4>Following</h4>
                  </div>
                  <div>
                    <h4>{userPostsState?.userPosts?.length}</h4>
                    <h4>Posts</h4>
                  </div>
                  <div>
                    <h4>{findUser?.followers?.length}</h4>
                    <h4>Followers</h4>
                  </div>
                </div>
              </div>
              <div className="expandPosts">
                {userPostsState?.userPosts?.map((post) => {
                  const likedByArray = post.likes.likedBy.filter(
                    (currUser) => currUser._id === currentUser._id
                  );
                  return (
                    <PostCard
                      {...post}
                      isLiked={!!likedByArray.length}
                      key={post._id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <Suggestions />
    </div>
  );
};
