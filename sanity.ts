// import {createClient} from 'next-sanity'
import createImageUrlBuilder from "@sanity/image-url";

// const projectId =process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

// export const config={
//  projectId :  projectId,// "pv8y60vp"
//  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
//  apiVersion : process.env.NEXT_PUBLIC_SANITY_API_VERSION, // "2022-11-16"
//  useCdn:process.env.NODE_ENV === "production",
// }

// export const sanityClient =createClient(config)

// export const urlFor =(source:any)=>
//     createImageUrlBuilder(config).image(source);

import { createClient } from "@sanity/client";

export const config = {
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id_here",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-11-16",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
