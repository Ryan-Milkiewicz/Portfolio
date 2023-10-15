import pageInfo from './pageInfo';
import experience from './experience';
import skill from './skill';
import social from './social';
import project from './project';
import { createSchema } from 'sanity';


export const schemaTypes = [pageInfo, experience, skill, project, social];


export default createSchema({
    name: "default",
    types: schemaTypes
});