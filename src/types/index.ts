export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  region: string;
  duration: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  bestSeason: string;
  topStays: string[];
}

export interface TourDay {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  id: string;
  title: string;
  category: 'signature' | 'wildlife' | 'honeymoon' | 'cultural';
  categoryLabel: string;
  duration: string;
  route: string;
  description: string;
  startingPrice: number;
  priceUnit: string;
  rating: number;
  reviewsCount: number;
  image: string;
  imageAlt: string;
  itinerary: TourDay[];
  inclusions: string[];
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  initials: string;
  rating: number;
}
