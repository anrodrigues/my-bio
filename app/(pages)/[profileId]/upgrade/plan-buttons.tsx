"use client";

import Button from "@/app/components/ui/button";
import { useParams } from "next/navigation";

export default function PlanButtons() {
  const { profileId } = useParams();

  return (
    <div className="flex gap-4">
      <Button
        onClick={() => { }}
      >
        R$ 9,90 / mês
      </Button>
      <Button onClick={() => { }}>
        R$ 99,90 Vitalício
      </Button>
    </div>
  );
}