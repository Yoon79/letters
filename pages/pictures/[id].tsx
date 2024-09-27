import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const callouts = [
  {
    name: "pink masking tape",
    description:"2024 ss",
    imageSrc: "/masking_pink.png",
    href: "/pictures/masking_pink.png",
  },
  {
    name: "blue masking tape",
    description:"2024 ss",
    imageSrc: "/masking_blue.png",
    href: "/pictures/masking_blue.png",
  },
  {
    name: "rockstar_cat keyring",
    description:"2024 ss",
    imageSrc: "/keyring.PNG",
    href: "/pictures/keyring.PNG",
  },
  {
    name: "2024 calendar",
    description:"2024 ss",
    imageSrc: "/2024.JPG",
    href: "/pictures/2024.JPG",
  },
  {
    name: "human_catnip_club hoody",
    description:"2023 FW",
    imageSrc: "/hoodyA.png",
    href: "/pictures/hoodyA.png",
  },
  {
    name: "tuesday_jazz_club hoody",
    description:"2023 FW",
    imageSrc: "/hoodyB.png",
    imageAlt:"",
    href: "/pictures/hoodyB.png",
  },
  {
    name: "santa_cat iPhone case",
    description:"2023 FW",
    imageSrc: "/phonecase.png",
    href: "/pictures/phonecase.png",
  },
  {
    name: "2023 calendar A ver.",
    description:"",
    imageSrc: "/calendarA.jpg",
    href: "/pictures/calendarA.jpg",
  },
  {
    name: "2023 calendar B ver.",
    description:"",
    imageSrc: "/calendarB1.jpg",
    href: "/pictures/calendarB1.jpg",
  },
  {
    name: "2023 calendar C ver.",
    description:"",
    imageSrc: "/calendarB2.jpg",
    href: "/pictures/calendarB2.jpg",
  },
  // {
  //   name: "널 기다려, 42.0 × 29.0cm Watercolor",
  //   description:
  //     "마른 탱자나무 가시같던 냉 바람이 쫓겨나고 언 땅을 헤지고 새싹이 돋아나는 이른 봄날. 누구보다 먼저 핑크빛 작은 입술을 내미는 노루귀는 넘 반가운 맘에 고개를 숙여 절을해야 느낄수 있다. 작은 바람에도 한들한들 내가 아닌 다른 이를 기다리고 있다고 말하는것 같다.",
  //   imageSrc: "/wait_for_you.jpeg",
  //   href: "/pictures/wait_for_you.jpeg",
  // },
  // {
  //   name: "친구의 향기, 41.0 × 26.0cm Watercolor",
  //   description:
  //     "꿈으로 가득했던 20대를 같이 하다. 30년후에야 다시 만난 오랜 친구. 어제 본듯 무심히 '잘지냈어?' '응'  한 마디로 말할수 없는 세월을 말하지 않아도 알 듯 한 시간들. 찬 바람이래야 꽃을 피우는 구절초는 오랜 친구의 깊은 마음의 향을 품었다",
  //   imageSrc: "/friends.jpeg",
  //   href: "/pictures/friends.jpeg",
  // },
  // {
  //   name: "기대 둘, 44.0×29.5cm Watercolor",
  //   description:
  //     "자목련 두 송이가 나를 보고 방긋 웃는다. 꽃도 웃고 나도 웃고 자목련을 그리는 내내 웃는다.",
  //   imageSrc: "/smile_two.jpeg",
  //   href: "/pictures/smile_two.jpeg",
  // },
];

const Picture: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const location = `/${id}`;
  const imageArr = callouts.filter((callout) => callout.imageSrc === location);
  const imageObj = imageArr[0];
  return (
    <>
      <div className="px-2 -mt-40 flex h-screen items-center justify-center">
        <div className="h-48 max-w-screen-md">
          <Image
            src={location}
            alt="Picture of the author"
            className="object-contain"
            width={500}
            height={500}
          />
          <div className=" ">
            <span className="font-mono text-justify text-sm italic text-gray-500">
              {imageObj != null ? imageObj.name : ""}
            </span>
            <p className="font-mono text-sm mt-2 font-light text-justify text-slate-900">
              {imageObj != null ? imageObj.description : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Picture;
