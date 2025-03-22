import React from "react";
import { Search } from "lucide-react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/components/ui/carousel";

const Hero = () => {
  const data = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
  ];
  return (
    <div className="h-70 bg-white flex items-center justify-center mt-5">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[2.70rem] font-extrabold text-center text-gray-700 mb-4 font-sans">
          Modernizing The Job Search Experience
        </h1>{" "}
        <div className="mt-4 flex flex-col sm:flex-row items-center bg-stone-100 backdrop-blur-md shadow-xl  rounded-full p-3 w-full max-w-lg">
          <Input
            type="text"
            placeholder="Search for Your Dream Job..."
            className="flex-grow bg-transparent border-none outline-none text-white px-4 py-2 placeholder-white"
          />
          <Button className="bg-transparent border-none text-white px-4 py-2">
            <Search className="w-5 h-5 " />
          </Button>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm mt-3"
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-2">
                <div className="">
                  <Button className="w-full px-1">{item}</Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
