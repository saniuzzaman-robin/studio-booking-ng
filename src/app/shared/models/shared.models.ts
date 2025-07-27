export type User = {
  active: boolean;
  email: string;
  id: number;
  join_date: string;
  username: string;
  following?: boolean;
};

export type Timeline = {
  content: string;
  id: number;
  published: string;
  user: User;
};
export type Environment = {
  production: boolean;
  debugMode: boolean;
  commandQueryUrls: {
    register: string;
    login: string;
    makeTweet: string;
    getAllUsers: string;
    getTweetsByUserId: string;
    getFollwingsByUserId: string;
    getFollowersByUserId: string;
    getMyFollowers: string;
    getMyFollowings: string;
    getMyTweets: string;
    getMyTimeline: string;
    followUser: string;
    unfollowUser: string;
    searchByUsername: string;
  };
};
export type PageConfig = {
  page: number;
  size: number;
};

export interface Booking {
  id: number;
  studioId: number;
  date: string; // Using string for date for simplicity, can use Date object if needed
  startTime: string; // Using string for time for simplicity, can use Date object if needed
  endTime: string; // Using string for time for simplicity, can use Date object if needed
  // Add other relevant properties
}

export interface Studio {
  id: number;
  name: string;
  type: string;
  location: Location;
  contact: Contact;
  amenities: string[];
  description: string;
  pricePerHour: number;
  currency: string;
  availability: Availability;
  rating: number;
  images: string[];
}

export interface Location {
  city: string;
  area: string;
  address: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Contact {
  phone: string;
  email: string;
}

export interface Availability {
  open: string; // Consider using a more specific type if needed
  close: string; // Consider using a more specific type if needed
}
