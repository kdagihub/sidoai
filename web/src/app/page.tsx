import { redirect } from "next/navigation";
import { getCurrentUserSS } from "@/lib/userSS";

export default async function Page() {
  try {
    const user = await getCurrentUserSS();
    if (user?.is_active && !user.is_anonymous_user) {
      redirect("/app");
    }
  } catch {
    // Backend indisponible : on affiche quand même la landing plutôt qu’un échec dur.
  }
  redirect("/landing");
}
