function ShoeCard(props: any) {
  const handleClick = () => {
    if (props.bigShoeImg !== props.imgURL.bigShoe) {
      props.changeBigShoeImage(props.imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        props.bigShoeImg === props.imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-2">
        <img
          className="object-contain"
          src={props.imgURL.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
}

export default ShoeCard;
