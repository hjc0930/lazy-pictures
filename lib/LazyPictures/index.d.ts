import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
export interface LoaderProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
}
declare const LazyPictures: {
    (props: LoaderProps): JSX.Element;
    displayName: string;
};
export default LazyPictures;
