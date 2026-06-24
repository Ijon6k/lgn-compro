export interface Product {
  id: string;
  title: string;
  image: string;
  href: string;
}

// TODO: Replace placeholders with actual LGN product assets when available
export const products: Product[] = [
  {
    id: "1",
    title: "LGN Cargo UAV",
    image: "/photos/products/cargo-uav-1.webp",
    href: "/products/cargo-uav",
  },
  {
    id: "2",
    title: "LGN Spraying UAV",
    image: "/photos/products/spraying-uav.webp",
    href: "/products/lgn-spraying-uav",
  },
  {
    id: "3",
    title: "LGN Multirotor Drone",
    image: "/photos/products/surveilance-uav.webp",
    href: "/products/lgn-multirotor-drone",
  },
  {
    id: "4",
    title: "Battery Drone & Parts",
    image: "/photos/products/battery-drone.webp",
    href: "/products/battery-drone-parts",
  },
  {
    id: "5",
    title: "LGN ROV Drone",
    image: "/photos/products/rov-drone.webp",
    href: "/products/lgn-rov-drone",
  },
  {
    id: "6",
    title: "LGN Dome / Anti Drone",
    image: "/photos/products/anti-drone.webp",
    href: "/products/lgn-dome-anti-drone",
  },
  {
    id: "7",
    title: "LGN Surveillance VTOL UAV",
    image: "/photos/products/cargo-uav.webp",
    href: "/products/lgn-surveillance-vtol-uav",
  },
  {
    id: "8",
    title: "LGN Helidrone",
    image: "/photos/products/helidrone.webp",
    href: "/products/lgn-helidrone",
  },
  {
    id: "9",
    title: "LGN fixed wing",
    image: "/photos/products/fixed-wing.webp",
    href: "/products/lgn-fixed-wing",
  },
];
