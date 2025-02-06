import Header from "@/app/components/landing-page/header";
import { Rocket } from "lucide-react";

import { Metadata } from "next";
import CreateLinkForm from "./create-link-form";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "ProjectInBio - Criar",
  description: "ProjectInBio - Criar",
};

export default function CriarPage() {


  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket className="size-10 text-white" />
        </div>
        <Suspense fallback={<p>Carregando formulário...</p>}>
          <CreateLinkForm />
        </Suspense>
      </div>
    </div>
  );
}