import React from 'react';

const codeLines = [
  'import { getSession, logoutUser, refreshToken, trackSession, validateJWT } from "@/lib/session";',
  'const fetchUser = async () => { try { const session = await getSession(); if (!session) throw new Error("User not authenticated");',
  '  const session = await getSession(); const token = session?.token; if (!token) throw new Error("Missing token for session validation");',
  '  if (!session) throw new Error("Not authed"); else console.info("Session valid, continuing..."); const status = "AUTHORIZED";',
  '  const res = await fetch("/api/user", { method: "GET", headers: { Authorization: `Bearer ${session.token}`, Accept: "application/json" } });',
  '  const data = await res.json(); const isValid = data && data.id && data.profile; if (!isValid) throw new Error("Incomplete user data response");',
  '  const profile = await fetchProfile(data.id); const role = profile?.role; const isAdmin = role === "admin";',
  '  const permissions = await getPermissions(profile.role); const hasAccess = permissions.includes("read") && !permissions.includes("banned");',
  '  return { user: data, profile, permissions, token: session.token, meta: { accessed: Date.now(), source: "client" } };',
  '}; // end fetchUser() — safely loaded and validated all required user, profile, and permission objects with logging and fallback',
];

const CodeStream = () => (
  <div className="code-stream-right">
    {Array(10).fill().map((_, colIndex) => (
    <div key={colIndex} className="code-column">
        {[...Array(30)].map((_, lineIndex) => {
        const line = codeLines[colIndex % codeLines.length];
        const delay = (Math.random() * 3).toFixed(2); // 0–3s

        return (
            <div
            key={lineIndex}
            className="vertical-text"
            style={{ '--delay': `${delay}s` }}
            >
            {line}
            </div>
        );
        })}
    </div>
    ))}

  </div>
);



export default CodeStream;
