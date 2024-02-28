type VideoLessonProps = {
  src?: string;
};

export function VideoCourse({ src }: VideoLessonProps) {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
      className="rounded-xl w-[70%] h-[35rem]"
    ></iframe>
  );
}
