import { Carousel } from "@material-tailwind/react";
 
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl w-100 lg:w-[20%]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
    
    <div className="flex h-full w-full items-center justify-center">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="image 1"
        className="h-[400px] w-[400px] object-contain"
      />
    </div>
    
    <div className="flex h-full w-full items-center justify-center">
      <img
        src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        alt="image 2"
        className="h-[400px] w-[400px] object-contain"
      />
    </div>

    <div className="flex h-full w-full items-center justify-center">
      <img
        src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        alt="image 3"
        className="h-[400px] w-[400px] object-contain"
      />
    </div>

    </Carousel>
  );
}