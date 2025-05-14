export default async function MenuLayout({
  children,
  restaurantbanner,
  restaurantdetail,
  restaurantmenu,
}: {
  children: React.ReactNode;
  restaurantbanner: React.ReactNode;
  restaurantdetail: React.ReactNode;
  restaurantmenu: React.ReactNode;
}) {
  return (
    <div>
      <main>
        <section>
          <>{restaurantbanner}</>
          <>{restaurantdetail}</>
          <>{restaurantmenu}</>
          <>{children}</>
        </section>
      </main>
    </div>
  );
}
