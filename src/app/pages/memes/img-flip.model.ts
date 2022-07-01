export interface ImgFlipModel {
  success: boolean;
  data: Data;
}
export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}
export interface Data {
  memes: Meme[];
}
