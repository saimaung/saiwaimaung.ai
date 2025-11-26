import type { SchemaTypeDefinition } from "sanity";
import achievement from "./achievement";
import blog from "./blog";
import certification from "./certification";
import contact from "./contact";
import education from "./education";
import experience from "./experience";
import profile from "./profile";
import project from "./project";
import service from "./service";
import skill from "./skill";
import testimonial from "./testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    project,
    service,
    education,
    skill,
    experience,
    certification,
    achievement,
    blog,
    testimonial,
    contact,
  ],
};
