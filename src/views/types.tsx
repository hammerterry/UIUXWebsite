import { z } from 'zod';

export const dogListObject = z.object({
  _id: z.string(),
  name: z.string(),
  breed: z.string(),
  age: z.number(),
  gender: z.string(),
  imageURL: z.string(),
  adoptionStatus: z.string(),
  adoptionID: z.string(),
  favouriteID: z.array(z.string()),
  adopter: z.string(),
  //isFavourite: z.boolean(),
});

export type DogSchema = z.infer<typeof dogListObject>;