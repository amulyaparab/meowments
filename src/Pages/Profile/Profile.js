import { useParams } from "react-router-dom";
import "./profile.css";
import { useUsers } from "../../Contexts/UsersProvider";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { usePost } from "../../Contexts/PostsProvider";
import { PostCard } from "../../Components/PostCard";
import { useAuth } from "../../Contexts/AuthProvider";
import { ProfileEditForm } from "../../Components/ProfileEditForm";
import { AvatarForm } from "../../Components/AvatarForm";
import { editUser } from "../../Services/userServices";
import { FollowButton } from "../../Components/SuggestedUsers/FollowButton";
import { useUtils } from "../../Contexts/UtilsProvider";
import blueCat from "../../assets/AvatarImages/blueCat.jpg";
import { useEffect } from "react";
import { getPostsByUser } from "../../Services/postServices";
import { Loader } from "../../Components/Loader";
export const Profile = () => {
  const { userId } = useParams();
  const {
    showUserEditForm,
    setShowUserEditForm,
    showAvatarForm,
    userDispatch,
    state,
    setShowAvatarForm,
  } = useUsers();
  const { state: userPostsState, postDispatch } = usePost();
  const { currentUser } = useAuth();

  const { logout, isDarkMode } = useUtils();
  const findUser = state.users.find((user) => user._id === userId);

  const formattedDate = new Date(findUser?.createdAt);
  const date = formattedDate.getDate();
  const month = formattedDate.toLocaleString("default", {
    month: "long",
  });
  const year = formattedDate.getFullYear();

  const isFoundUserSameAsCurrentUser = findUser?._id === currentUser?._id;

  const fetchUserPosts = async () => {
    try {
      // postDispatch({ type: "POST_LOADING", payload: true });
      const postsByUser = await getPostsByUser(findUser?.username);
      postDispatch({ type: "UPDATE_USER_POSTS", payload: postsByUser });
    } catch (err) {
      console.log(err);
    } finally {
      // postDispatch({ type: "POST_LOADING", payload: false });
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
                        <i class="fa-solid fa-paw"></i>
                        {findUser?.bio}
                      </p>
                    )}
                    {findUser?.website?.length && (
                      <div>
                        <i class="fa-solid fa-display"></i>
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
                        <i class="fa-solid fa-user"></i>
                        {findUser?.occupation}
                      </p>
                    )}
                    <p>
                      <i class="fa-regular fa-calendar"></i>
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
                        class="fa-solid fa-right-from-bracket logout-icon"
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
                  return <PostCard {...post} isLiked={!!likedByArray.length} />;
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
