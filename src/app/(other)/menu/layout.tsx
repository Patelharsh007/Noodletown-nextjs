// app/(other)/menu/layout.tsx
export default function MenuLayout({
  children,
  topbrands,
  foodbyweather,
}: {
  children: React.ReactNode;
  topbrands: React.ReactNode;
  foodbyweather: React.ReactNode;
}) {
  return (
    <div>
      <main>
        {children}
        <section>
          <>{topbrands}</>
          <>{foodbyweather}</>
        </section>
      </main>
    </div>
  );
}
