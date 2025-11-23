import ProtectedPage from "@/components/auth/ProtectedPage";

export default function DashboardPage() {
  return (
    <ProtectedPage>
      <div>Dashboard Content</div>
    </ProtectedPage>
  );
}
