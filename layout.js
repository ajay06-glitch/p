export const metadata = {
  title: "VAYRA Jewellery",
  description: "Modern luxury jewellery inspired by nature and textures."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
