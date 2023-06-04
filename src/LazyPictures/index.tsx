import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useRef } from "react";

export interface LoaderProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const LazyPictures = (props: LoaderProps) => {
  const childRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    childRef.current?.setAttribute("data-src", props.src as string);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const dataSrc = image.getAttribute("data-src") as string;
          image.setAttribute("src", dataSrc);
          observer.unobserve(image);
        }
      });
    });

    observer.observe(childRef.current as HTMLElement);
  }, []);
  return <img {...props} src={undefined} ref={childRef} />;
};

LazyPictures.displayName = "LazyPictures";

export default LazyPictures;
