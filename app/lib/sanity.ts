import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true,
    apiVersion: '2023-05-03',
  })


const builder = imageUrlBuilder(client)

export function urlFor(source : any) {
  return builder.image(source);
}