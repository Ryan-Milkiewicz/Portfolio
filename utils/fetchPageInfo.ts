import { PageInfo } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "pageInfo"][0]
`;

export const fetchPageInfo = async() => {
    //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const pageInfo: PageInfo = await sanityClient.fetch(query);
   // const data = await res.json();
   // const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}