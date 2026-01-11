import { useState } from "react";

export default function Newsletter() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!fullName.trim() || !email.includes("@")) {
      setStatus("error");
      setMessage("Please fill in valid name and email");
      return;
    }

    try {
      const res = await fetch("/api/add-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong. Please reach out to us at contact@pocketbyte.co");

      setStatus("success");
      setMessage("Thank you! You will now receive updates and news.");
      setFullName("");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Failed to add contact");
    }
  };

    return (
      <div className='bg-fd-primary-foreground p-16 flex flex-col place-items-center'>
        <div className="text-center mb-8">
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Want One?</h2>
            <p className="text-fd-muted-foreground text-lg">Opt-in to receive updates, announcements, and important changes to your inbox. <br/>No spam—pinky swear.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-lg w-full">
          <div className='bg-fd-muted/50'>
            {/* <label htmlFor="fullName">Full Name</label> */}
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
              className='p-2 rounded-md border-fd-border focus:border-fd-accent-foreground border-2 w-full'
            />
          </div>

          <div className='bg-fd-muted/50'>
            {/* <label htmlFor="email">Email Address</label> */}
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@address.com"
              required
              className='p-2 rounded-md border-fd-border focus:border-fd-accent-foreground border-2 w-full'
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`p-2 rounded-full w-full text-fd-primary-foreground cursor-pointer ${status === "loading" ? "bg-green-500" : "bg-fd-primary"}`}
          >
            {status === "loading" ? "Adding..." : "Subscribe"}
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "1.5rem",
              padding: "0.8rem",
              borderRadius: "6px",
              background: status === "success" ? "#d4edda" : "#f8d7da",
              color: status === "success" ? "#155724" : "#721c24",
            }}
          >
            {message}
          </p>
        )}
      </div>
    )
}
