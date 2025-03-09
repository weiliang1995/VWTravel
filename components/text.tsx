import React from "react";

type Props = {
  title: string;
};
const dummyContent = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nisl quis tincidunt ultrices, justo ipsum aliquam lectus,
            sit amet ultricies dolor quam eu diam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed ultricies, nisl quis tincidunt
            ultrices, justo ipsum aliquam lectus, sit amet ultricies dolor quam
            eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ultricies, nisl quis tincidunt ultrices, justo ipsum aliquam
            lectus, sit amet ultricies dolor quam eu diam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed ultricies, nisl quis
            tincidunt ultrices, justo ipsum aliquam lectus, sit amet ultricies
            dolor quam eu diam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed ultricies, nisl quis tincidunt ultrices, justo
            ipsum aliquam lectus, sit amet ultricies dolor quam eu diam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies,
            nisl quis tincidunt ultrices, justo ipsum aliquam lectus, sit amet
            ultricies dolor quam eu diam.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nisl quis tincidunt ultrices, justo ipsum aliquam lectus,
            sit amet ultricies dolor quam eu diam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed ultricies, nisl quis tincidunt
            ultrices, justo ipsum aliquam lectus, sit amet ultricies dolor quam
            eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ultricies, nisl quis tincidunt ultrices, justo ipsum aliquam
            lectus, sit amet ultricies dolor quam eu diam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed ultricies, nisl quis
            tincidunt ultrices, justo ipsum aliquam lectus, sit amet ultricies
            dolor quam eu diam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed ultricies, nisl quis tincidunt ultrices, justo
            ipsum aliquam lectus, sit amet ultricies dolor quam eu diam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies,
            nisl quis tincidunt ultrices, justo ipsum aliquam lectus, sit amet
            ultricies dolor quam eu diam.`,
];

export default function Text({ title }: Props) {
  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-3xl font-montserrat font-bold">{title}</h2>
      <div
        className="w-2/3 flex pt-16 gap-8"
        style={{ height: "calc(50vh + 64px)" }}
      >
        <div className="basis-1/2 ">
          <p className="text-lg">{dummyContent[0]}</p>
        </div>
        <div className="basis-1/2">
          <p className="text-lg">{dummyContent[1]}</p>
        </div>
      </div>
    </div>
  );
}
