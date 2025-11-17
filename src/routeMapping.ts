import { Project } from './types';

// Map Project enum to URL-friendly slugs
export const projectToSlug: Record<Project, string> = {
  [Project.RobertBrada]: 'about',
  [Project.StakeBar]: 'stakebar',
  [Project.SDP]: 'sdp',
  [Project.Observatory]: 'observatory',
  [Project.CrocoFinance]: 'croco-finance',
  [Project.Satoshilabs]: 'satoshilabs',
  [Project.DuoCards]: 'duocards',
  [Project.Eigen]: 'eigenbeat',
  [Project.Wormhole]: 'wormhole',
  [Project.Mayan]: 'mayan',
};

// Reverse mapping: slug to Project enum
export const slugToProject: Record<string, Project> = Object.entries(
  projectToSlug
).reduce((acc, [project, slug]) => {
  acc[slug] = project as Project;
  return acc;
}, {} as Record<string, Project>);

// Helper to get slug from project
export function getProjectSlug(project: Project): string {
  return projectToSlug[project];
}

// Helper to get project from slug
export function getProjectFromSlug(slug: string): Project | undefined {
  return slugToProject[slug];
}
