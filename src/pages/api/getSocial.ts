import type { NextApiRequest,NextApiResponse } from "next"
import {groq} from 'next-sanity'
import { type } from "os";
// import { SanityClient } from "sanity";
import { sanityClient } from "../../../sanity";
import { Social } from "../../../typing";

const query = groq`
    *[__type == "social"]

    `
    console.log(query)
type Data ={
    socials:Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socials :Social[] =await sanityClient.fetch(query)
    res.status(200).json({ socials })
  }

  