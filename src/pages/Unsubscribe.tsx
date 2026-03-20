import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const validate = async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        if (!res.ok) { setStatus("invalid"); return; }
        const data = await res.json();
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        setStatus("invalid");
      }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) { setStatus("error"); return; }
      if (data?.success) { setStatus("success"); }
      else if (data?.reason === "already_unsubscribed") { setStatus("already"); }
      else { setStatus("error"); }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-semibold text-foreground">Email Preferences</h1>

        {status === "loading" && (
          <p className="text-muted-foreground">Verifying…</p>
        )}

        {status === "valid" && (
          <>
            <p className="text-muted-foreground">
              Click below to unsubscribe from future emails.
            </p>
            <button
              onClick={handleUnsubscribe}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/85 active:scale-[0.98] transition-all"
            >
              Confirm Unsubscribe
            </button>
          </>
        )}

        {status === "success" && (
          <p className="text-muted-foreground">You've been unsubscribed. You won't receive further emails.</p>
        )}

        {status === "already" && (
          <p className="text-muted-foreground">You're already unsubscribed.</p>
        )}

        {status === "invalid" && (
          <p className="text-muted-foreground">This link is invalid or has expired.</p>
        )}

        {status === "error" && (
          <p className="text-destructive">Something went wrong. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
