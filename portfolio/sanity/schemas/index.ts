import pageInfo from './pageInfo';
import experience from './experience';
import skill from './skill';
import social from './social';
import { createSchema } from 'sanity';


export const schemaTypes = [pageInfo, experience, skill, social];


export default createSchema({
    name: "default",
    types: schemaTypes
});