"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      
      {/* Logo */}
      <div style={styles.logo}>
        Bidget<span style={{ color: "#FFD700" }}>Recycle</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Cari produk daur ulang..."
        style={styles.search}
      />

      {/* Menu */}
      <div style={styles.menu}>
        <Link href="/home" style={styles.link}>Beranda</Link>
        <Link href="/produk" style={styles.link}>Product</Link>
        <Link href="/layanan" style={styles.link}>Keunggulan Produk</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
        <Link href="/logout" style={styles.link}>Logout</Link>
      </div>

    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#1f7a3f",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    gap: "20px",
    flexWrap: "wrap",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  search: {
    flex: 1,
    maxWidth: "400px",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },
  menu: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};