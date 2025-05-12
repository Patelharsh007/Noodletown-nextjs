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
