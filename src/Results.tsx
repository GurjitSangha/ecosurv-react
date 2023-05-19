interface Props {
  images: string[] | null;
}
const Results = ({ images }: Props) => {
  console.log({ images });
  if (images === null) return null;

  if (images.length == 0) return <div>Loading...</div>;

  return (
    <div className="flex gap-4 justify-center">
      {images.map((url) => (
        <img key={url} src={url} className="w-60 h-60" />
      ))}
    </div>
  );
};

export default Results;
