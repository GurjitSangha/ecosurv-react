interface Props {
  images: string[] | null;
}
const Results = ({ images }: Props) => {
  if (images === null) return null;

  if (images.length == 0) return <div>Loading...</div>;

  return (
    <div className="flex gap-4 justify-center">
      {images.map((url) => (
        <img key={url} src={url} className="w-80" />
      ))}
    </div>
  );
};

export default Results;
