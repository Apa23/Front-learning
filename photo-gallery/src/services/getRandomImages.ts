import { CustomImage, FetchPreset } from "../config/types";
import env from '../env';

type RandomImagesParams = {
    count: string
    client_id: string
};
type RandomImagesResponse = CustomImage[];

export const GET_RANDOM_IMAGES: FetchPreset<RandomImagesParams, undefined, RandomImagesResponse, object> = {
    url: 'https://api.unsplash.com/photos/random',
    method: 'GET',
    params: {
        count: "6",
        client_id: env.UNSPLASH_API_KEY
    }

};