import React, { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { Link } from "react-router";

function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔹 Use the password strategy here
      const result = await signIn.create({
        identifier: username,
        password,
        strategy: "password",
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        alert("Signed in successfully!");
      } else {
        console.log("Further steps required:", result);
      }
    } catch (err) {
      console.error("Error:", err);
      setError(err.errors?.[0]?.message || "Sign-in failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "250px" }}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </form>
  );
}

export default SignIn;  