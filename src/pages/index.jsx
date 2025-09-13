import React from "react";
import Layout from "@docusaurus/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout title="Documentação" description="Ninebasic — API & guias">
      <main style={{ padding: "64px 16px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>Ninebasic Docs</h1>
          <p style={{ color: "#475569", fontSize: 18, marginBottom: 24 }}>
            Central de referência da API, com exemplos e respostas padronizadas.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <Link className="btnPrimary" to="/api">Abrir API Reference</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
