import { Image } from "./Image";

export interface Work{
    id: number,
    title: string,
    subtitle: string,
    imageTitle: string,
    listImage: Image[],
    mediaQuery: string
}