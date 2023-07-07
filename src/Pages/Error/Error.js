import { useUtils } from "../../Contexts";

export const Error = () => {
  const { isDarkMode } = useUtils();
  return (
    <div className="entire-page" id={`${isDarkMode && "dark"}`}>
      <img
        className="error-img"
        src="https://res.cloudinary.com/amulya27/image/upload/v1688729414/Errors_in_JavaScript_2_kfjdni.png"
        alt="Page Not Found."
      />
      <h2 className="general-heading" id={`${isDarkMode && "light-text"}`}>
        Page Not Found
      </h2>
    </div>
  );
};
