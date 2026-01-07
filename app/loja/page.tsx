import { Suspense } from "react";
import LojaClient from "./LojaClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ color: "white" }}>Carregando...</div>}>
      <LojaClient />
    </Suspense>
  );
}
