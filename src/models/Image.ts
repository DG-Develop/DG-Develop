export interface Image{
    id: number,
    route: string,
    imageTitle: string,
    description: string[],
    listImage: Image[]
    media: string
}