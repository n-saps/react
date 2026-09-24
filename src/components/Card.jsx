const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-xl bg-neutral-200 shadow-md">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="mb-4 text-gray-600">
          {description}
        </p>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;