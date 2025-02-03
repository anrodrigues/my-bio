"use client"

import Modal from "@/app/components/ui/modal";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function NewProject({ profileId }: { profileId: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(true)
  }

  return (
    <>

      <button
        onClick={handleModal}
        className="w-[340px] h[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed "
      >
        <Plus className="size-10 text-accent-green" />
        <span>Novo Projeto</span>
      </button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
        <div className="border p-10">Modal Content</div>
      </Modal>
    </>
  )
}