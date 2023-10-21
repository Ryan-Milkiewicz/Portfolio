import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "experience"] | order(dateStarted desc) {
        ...,
        technologies[]->
    }
`;

export const fetchExperiences = async() => {
  //  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
  const experience: Experience[] = await sanityClient.fetch(query);
  //  const data = await res.json();
   // const experience: Experience[] = data.experience;

    return experience;
}