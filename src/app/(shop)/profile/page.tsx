import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  //if (!session?.user) redirect("/auth/login?redirect=/perfil");
  if (!session?.user) redirect("/");
  return (
    <div>
      <Title title="Perfil" />

      <pre>
        {
          // @ts-ignore
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
        }
      </pre>
    </div>
  );
}
