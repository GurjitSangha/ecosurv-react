interface Props {
  breed: string;
  images: string[] | null;
}
const Results = ({ breed, images }: Props) => {
  if (images === null) return null;

  if (images.length == 0) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap max-w-4xl gap-4 justify-center">
      {images.map((url) => (
        <img key={url} src={url} alt={breed} className="w-60 h-60" />
      ))}
    </div>
  );
};

export default Results;
