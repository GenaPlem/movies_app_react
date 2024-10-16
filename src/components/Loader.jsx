import "ldrs/trefoil";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <l-trefoil
        size="65"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4"
        color="white"
      ></l-trefoil>
    </div>
  );
};

export default Loader;
