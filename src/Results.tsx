import { DogImage } from './App';

interface Props {
  images: DogImage[] | null;
}
const Results = ({ images }: Props) => {
  if (images === null) return null;

  if (images.length == 0) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap justify-center max-w-4xl gap-4">
      {images.map((img) => (
        <img key={img.image} src={img.image} alt={img.alt} className="w-60 h-60" />
      ))}
    </div>
  );
};

export default Results;
