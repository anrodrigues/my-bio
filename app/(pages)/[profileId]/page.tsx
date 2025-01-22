import ProjectCard from "@/app/components/commons/project-card";
import TotalVisits from "@/app/components/commons/total-visits";
import UserCard from "@/app/components/commons/user-card/user-card";
import { Plus } from "lucide-react";
import Link from "next/link";

type ProfilePageProps = {
  params: {
    profileId: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { profileId } = await params;


  return (
    <div className="relative h-screen flex p-20 overflow-hidden">

      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você está usando a versão trial.</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-accent-green font-bold">
            Faça o upgrade agora!
          </button>
        </Link>
      </div>


      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto  max-w-[720px]">
        <ProjectCard
          name="Projeto 2"
          description="Descrição do projeto 2"
          img="/project2.jpg"
        />

        <ProjectCard
          name="Projeto 2"
          description="Descrição do projeto 2"
          img="/project2.jpg"
        />

        <ProjectCard
          name="Projeto 2"
          description="Descrição do projeto 2"
          img="/project2.jpg"
        />

        <ProjectCard
          name="Projeto 2"
          description="Descrição do projeto 2"
          img="/project2.jpg"
        />
        
        <ProjectCard
          name="Projeto 2"
          description="Descrição do projeto 2"
          img="/project2.jpg"
        />
        
        <ProjectCard
          name="Projeto 2"
          description="Descrição do projeto 2"
          img="/project2.jpg"
        />
        
        <ProjectCard
          name="Projeto 2"
          description="Descrição do projeto 2"
          img="/project2.jpg"
        />

        <button className="w-[340px] h[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed ">
          <Plus className="size-10 text-accent-green" />
          <span>Novo Projeto</span>
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits totalVisits={1250} showBar />
      </div>

    </div>
  )

}