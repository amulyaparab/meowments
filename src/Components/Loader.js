import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots
        height="180"
        width="180"
        radius="9"
        color="#ffc11b"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
