import Navbar from "@/components/Navbar";

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar linkColor="#000000" />
      <>{children}</>
    </>
  );
}
