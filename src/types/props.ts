interface NavbarProps {
  linkColor: string;
}

interface dummy_dining_out_data {
  imgurl: string;
  heading: string;
  statement: string;
}

interface CardData {
  imgurl: string;
  heading: string;
  statement: string;
}

interface DiningOutCardProps {
  Card: {
    imgurl: string;
    heading: string;
    statement: string;
  };
}

interface BestDelieveredBoxProps {
  box: { id: string; imageurl: string; title: string };
}

// -------------------------------menu------------------------
interface topBrandUiProp {
  restaurant: { id: string; title: string; logo: string };
}

interface topBrandRestaurant {
  id: string;
  title: string;
  logo: string;
}

interface foodCategoryGroupProp {
  Card: {
    groupName: string;
    groupDetails: string;
    groupImage: string;
  };
}

interface foodByCategoryGroup {
  groupName: string;
  groupDetails: string;
  groupImage: string;
}

// -------------------------------Restaurant------------------------

// -------------------------------Product------------------------
