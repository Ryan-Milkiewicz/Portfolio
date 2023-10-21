import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "project"] | order(dateStarted desc) {
        ...,
        technologies[]->
    }
`;

export const fetchProjects = async() => {
    //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`);
    const projects: Project[] = await sanityClient.fetch(query);
    //const data = await res.json();
   // const projects: Project[] = data.projects;

    return projects;
}