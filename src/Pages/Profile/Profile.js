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
  const { state: userPostsState } = usePost();
  const { currentUser } = useAuth();
  const findUser = state.users.find((user) => user._id === userId);

  const formattedDate = new Date(findUser?.createdAt);
  const date = formattedDate.getDate();
  const month = formattedDate.toLocaleString("default", {
    month: "long",
  });
  const year = formattedDate.getFullYear();

  const isFoundUserSameAsCurrentUser = findUser?._id === currentUser?._id;

  return (
    <div className="page-fractions">
      <SideNav />
      <div className="profile-parent">
        <div className="profile">
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
                <p>
                  <i class="fa-solid fa-paw"></i>

                  {findUser?.bio}
                </p>
                <i class="fa-solid fa-display"></i>
                <a href={findUser?.website} target="_blank" rel="noreferrer">
                  Portfolio website
                </a>
                <p>
                  {" "}
                  <i class="fa-solid fa-user"></i>
                  {findUser?.occupation}
                </p>
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
              </div>
            </div>
            {showUserEditForm && <ProfileEditForm />}
            {showAvatarForm && <AvatarForm />}
            <div className="profile-tabs">
              <div>
                <h4>0</h4>
                <h4>Following</h4>
              </div>
              <div>
                <h4>{userPostsState?.userPosts?.length}</h4>
                <h4>Posts</h4>
              </div>
              <div>
                <h4>0</h4>
                <h4>Followers</h4>
              </div>
            </div>
          </div>
          <div className="expandPosts">
            {userPostsState?.userPosts?.map((post) => (
              <PostCard {...post} />
            ))}
          </div>
        </div>
      </div>
      <Suggestions />
    </div>
  );
};
