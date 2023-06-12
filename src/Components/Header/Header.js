import "./header.css";

export const Header = () => {
  return (
    <div className="navbar">
      <h1 className="heading">
        meow<span>Ments</span>
      </h1>
      <div>
        <i class="fa-solid fa-sun"></i>
        <i class="fa-solid fa-moon"></i>
      </div>
    </div>
  );
};
