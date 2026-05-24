import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/cursos/junior")({
  component: JuniorLayout,
});

function JuniorLayout() {
  return <Outlet />;
}
