import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setUser(data.user);
      }
    }

    fetchUser();
  }, []);

  return (
    <main style={{ padding: "24px" }}>
      <h1>My Profile 👤</h1>

      {user && (
        <>
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>User ID:</strong> {user.id}
          </p>
        </>
      )}
    </main>
  );
}

export default ProfilePage;