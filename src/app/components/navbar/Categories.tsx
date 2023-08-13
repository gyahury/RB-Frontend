"use client";

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { FaParking, FaTree } from "react-icons/fa";
import { BsHouseFill, BsHousesFill, BsFillBuildingFill, BsSunFill, BsSunglasses } from "react-icons/bs";
import { MdHomeWork, MdTrain, MdElevator, MdAttachMoney } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";



export const categories = [
  {
    label: "쨍쨍한 햇빛",
    icon: BsSunFill,
    description: "햇빛이 잘드는 매물입니다."
  },
  {
    label: "자연과 함께",
    icon: FaTree,
    description: "주위에 자연환경이 많은 매물입니다."
  },
  {
    label: "합리적인",
    icon: MdAttachMoney,
    description: "가격이 합리적인 매물입니다."
  },
  {
    label: "감성적인",
    icon: BsSunglasses,
    description: "감성적인 인테리어를 가진 매물입니다."
  },
  {
    label: "편안한 원룸",
    icon: BsHouseFill,
    description: "원룸입니다."
  },
  {
    label: "편안한 투룸",
    icon: BsHousesFill,
    description: "투룸입니다."
  },
  {
    label: "쓰리룸 이상",
    icon: MdHomeWork,
    description: "쓰리룸 이상입니다."
  },
  {
    label: "오피스텔",
    icon: BsFillBuildingFill,
    description: "오피스텔입니다."
  },
  {
    label: "편리한 교통",
    icon: MdTrain,
    description: "주위의 교통 접근성이 좋은 매물입니다."
  },
  {
    label: "편리한 주차",
    icon: FaParking,
    description: "주차장이 있습니다."
  },
  {
    label: "엘리베이터",
    icon: MdElevator,
    description: "엘리베이터가 있습니다."
  },
  {
    label: "옥탑방",
    icon: SiHomeassistantcommunitystore,
    description: "옥탑방 매물입니다."
  }
];

const category = ""

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
