import { PlatformType } from "./PlatformType";

export interface GameType {
    id: number;
    name: string;
    released: string;
    background_image: string;
    rating: number;
    metacritic: number;
    parent_platforms: [{ platform: PlatformType }];
  }