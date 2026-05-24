import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/cursos/create")({
  component: CreateLayout,
});

function CreateLayout() {
  return <Outlet />;
}
