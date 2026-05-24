import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  component: SobreLayout,
});

function SobreLayout() {
  return <Outlet />;
}
