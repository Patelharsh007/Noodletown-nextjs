import RestaurantOrderOnline from "@/section/restaurant/RestaurantOrderOnline";

export default async function RestaurantPage({
  params,
}: {
  params: { restaurantId: string };
}) {
  const { restaurantId } = await params;

  return (
    <>
      <RestaurantOrderOnline id={restaurantId} />
    </>
  );
}
