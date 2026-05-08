import Button from "../ui/Button";

const HeroContent = () => {
  return (
    <div className="relative z-20 text-center text-white max-w-4xl px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        The Best Streaming Experience
      </h1>

      <p className="text-gray-300 mb-6 text-sm md:text-base">
        StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
      </p>

      <Button text="Start Watching Now" />
    </div>
  );
};

export default HeroContent;
