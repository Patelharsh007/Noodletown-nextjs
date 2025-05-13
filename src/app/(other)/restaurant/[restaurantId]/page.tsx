import RestaurantBanner from "@/section/Restaurant/RestaurantBanner";

export default async function RestaurantPage({
  params,
}: {
  params: { restaurantId: string };
}) {
  const { restaurantId } = await params;

  return (
    <>
      <RestaurantBanner restaurantId={restaurantId} />
    </>
  );
}
