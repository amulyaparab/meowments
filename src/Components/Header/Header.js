import "./header.css";

export const Header = () => {
  return (
    <div className="navbar">
      <h1 className="heading">
        meow<span>Ments</span>
      </h1>
      <div className="theme">
        <i class="fa-solid fa-sun"></i>
        <div className="theme-toggler"></div>
        <i class="fa-solid fa-moon"></i>
      </div>
    </div>
  );
};
