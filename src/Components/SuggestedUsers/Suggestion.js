import { useUtils } from "../../Contexts/UtilsProvider";
export const SuggestedUser = ({
  _id,
  avatarUrl,
  username,
  firstName,
  lastName,
  showUserName,
  postDate,
  hideUserDetails,
  dark,
}) => {
  const { isDarkMode, takeToProfilePage } = useUtils();
  const formattedDate = new Date(postDate);
  const date = formattedDate.getDate();
  const month = formattedDate.toLocaleString("default", {
    month: "long",
  });
  const year = formattedDate.getFullYear();

  return (
    <div className="suggestionsPerson">
      <img
        src={avatarUrl}
        alt={username}
        onClick={() => takeToProfilePage(_id, username)}
      />
      <div className={`${hideUserDetails && "no-display"}`}>
        {" "}
        <h4
          className="cursor"
          id={`${isDarkMode && dark && "white"} `}
          onClick={() => takeToProfilePage(_id, username)}
        >
          {firstName} {lastName}
        </h4>
        {showUserName ? (
          <p onClick={() => takeToProfilePage(_id, username)}>@{username}</p>
        ) : (
          <p className="date">
            {`${date}
                ${month}
                ${year}`}
          </p>
        )}
      </div>
    </div>
  );
};
