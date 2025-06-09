"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@/utils/supabase/client";
import router from "next/navigation";
import { useEffect } from "react";

const supabase = createClient();

export default function TempPage() {
  console.log("TempPage rendered");

  useEffect(() => {
    console.log("useEffect called");

    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      console.log("Auth state changed:", event);
      if (event === "SIGNED_IN") {
        router.redirect("/"); // Use Next.js router to navigate
      }
    });

    console.log("authListener", authListener);

    return () => {
      //   authListener?.unsubscribe()
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg w-300">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
        />
      </div>
    </div>
  );
}
