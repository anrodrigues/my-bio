import ProjectCard from "@/app/components/commons/project-card";
import TotalVisits from "@/app/components/commons/total-visits";
import UserCard from "@/app/components/commons/user-card/user-card";
import { auth } from "@/app/lib/auth";
import { getProfileData, getProfileProjects } from "@/app/server/get-profile-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewProject from "./new-project";
import { getDownloadURLFromPath } from "@/app/lib/firebase";
import { increaseProfileVisits } from "@/app/actions/encrease-profile-visits";




export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params; // Não precisa forçar tipagem, já está correto

  const profileData = await getProfileData(profileId);
  if (!profileData) return notFound();

  const projects = await getProfileProjects(profileId);
  const session = await auth();

  const isOwner = profileData.userId === session?.user?.id;

  if (!isOwner) {
    await increaseProfileVisits(profileId)
  }

  // Resolve todas as imagens antes do render
  const projectsWithImages = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      img: await getDownloadURLFromPath(project.imagePath) || "",
    }))
  );

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      {session?.user.isTrial && !session.user.isSubscribed && (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
          <span>Você está usando a versão trial.</span>
          <Link href={`/${profileId}/upgrade`}>
            <button className="text-accent-green font-bold">
              Faça o upgrade agora!
            </button>
          </Link>
        </div>
      )}

      <div className="w-1/2 flex justify-center h-min">
        <UserCard profileData={profileData} isOwner={isOwner} />
      </div>

      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto max-w-[720px]">
        {projectsWithImages.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            isOwner={isOwner}
            name={project.projectName}
            description={project.projectDescription}
            img={project.img}
          />
        ))}

        {isOwner && <NewProject profileId={profileId} />}
      </div>

      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits totalVisits={profileData.totalVisits} showBar />
      </div>
    </div>
  );
}
