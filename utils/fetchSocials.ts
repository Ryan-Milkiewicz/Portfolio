import { Social } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "social"]
`;

export const fetchSocial = async() => {
    //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const socials: Social[] = await sanityClient.fetch(query);
  //  const data = await res.json();
  //  const socials: Social[] = data.socials;

    return socials;
}