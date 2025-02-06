import "server-only";

import { db } from "../lib/firebase";

export type ProfileData = {
  userId: string;
  name: string;
  description: string;
  imagePath: string;
  totalVisits: number;
  createdAt: number;
  socialMedias?: {
    github: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
  link1?: string;
  link2?: string;
  link3?: string;
  updatedAt?: number;
};

export type ProjectData = {
  id: string;
  userId: string;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  imagePath: string;
  createdAt: string;
  totalVisits?: number;
};


export async function getProfileData(profileId: string) {
  const snapshot = await db.collection("profiles").doc(profileId).get()

  return snapshot.data() as ProfileData;
}

export async function getProfileProjects(profileId: string) {
  console.log("Fetching projects for profileId:", profileId);
  if (!profileId) {
    console.error("❌ profileId is undefined or null");
    return [];
  }

  const snapshot = await db
    .collection("profiles")
    .doc(profileId)
    .collection("projects")
    .get();

  console.log("✅ Documents found:", snapshot.docs.length);
  return snapshot.docs.map((doc) => doc.data() as ProjectData);
}

