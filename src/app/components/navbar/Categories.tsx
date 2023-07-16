"use client";

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { FaParking } from "react-icons/fa";

export const categories = [
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "주차가능",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
];

const category = "주차가능"

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
            <CategoryBox 
                key={item.label}
                label={item.label}
                icon={item.icon}
                /* selected={category == item.label} */
            />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
