import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) return;

      setUser(userData.user);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userData.user.id)
        .single();

      if (error) {
        console.log(error);
      } else {
        setProfile(data);
      }
    }

    fetchProfile();
  }, []);

  return (
    <main style={{ padding: "24px" }}>
      <h1>My Profile 👤</h1>

      {user && (
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            maxWidth: "500px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          {profile?.profile_image && (
            <img
              src={profile.profile_image}
              alt={profile.full_name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "16px",
              }}
            />
          )}

          <p>
            <strong>Name:</strong>{" "}
            {profile?.full_name || "No name added yet"}
          </p>

          <p>
            <strong>Email:</strong> {profile?.email || user.email}
          </p>

          <p>
            <strong>Bio:</strong>{" "}
            {profile?.bio || "No bio added yet"}
          </p>

          <p>
            <strong>User ID:</strong> {user.id}
          </p>
        </div>
      )}
    </main>
  );
}

export default ProfilePage;