import type { NextApiRequest,NextApiResponse} from 'next'
import {groq} from 'next-sanity'
import { type } from "os";
// import { SanityClient } from "sanity";
import { sanityClient } from "../../../sanity";
import { Skill } from "../../../typing";

const query = groq`
    *[__type == "skill"]

    `
type Data ={
    skills:Skill[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const skills :Skill[] =await sanityClient.fetch(query)
    console.log("skills retreived ", skills)
    res.status(200).json({ skills })
  }
  