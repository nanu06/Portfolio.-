import { Skill } from "../typing";

// export const fetchSkills = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

//   const data = await res.json();
//   const skills: Skill[] = data.skills;

//   return skills;
// };

export const fetchSkills = async () => {
  console.log('fetchSkills called')
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  console.log('res', res)
  const data = await res.json();
  console.log('data', data)
  const skills: Skill[] = data.skills;
  console.log('skills', skills)
  return skills;
};
