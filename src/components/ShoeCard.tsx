function ShoeCard(props: any) {

    const handleClick = ($event: any) => {
        if (props.bigShoeImg === props.imgURL.bigShoe) {
            props.changeBigShoeImage(props.imgURL.bigShoe)
        }
    }
  return (
    <div
      className={`border-2 rounded-xl ${
        props.bigShoeImg === props.imgURL
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        
    </div>
  );
}

export default ShoeCard;
