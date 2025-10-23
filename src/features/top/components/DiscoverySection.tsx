import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const discoveryItems = [
  {
    title: "美食俱楽部「料理屋 大三」",
    image: "https://kanadoc.com/articleImage/63/t.jpg",
    id: 63,
  },
  {
    title: "美食俱楽部「Doicciane(ドイッチャーネ)」",
    image: "https://kanadoc.com/articleImage/62/t.jpg",
    id: 62,
  },
  {
    title: "美食俱楽部「イタリア料理 アルモニーア」",
    image: "https://kanadoc.com/articleImage/58/t.jpg",
    id: 58,
  },
  {
    title: "美食俱楽部「ファミリーなフレンチのお店 ビストロ・ラ・シャンブル」",
    image: "https://kanadoc.com/articleImage/59/t.jpg",
    id: 59,
  },
];

const DiscoverySection = () => {
  return (
    <section className="py-[70px] px-6  flex items-center justify-center w-full min-h-[500px] bg-[url('https://kanadoc.com/image/headerImage/newmainTop3.jpg')] bg-cover bg-center">
      <div className="xl:w-[1120px] 2xl:w-[1120px] w-full  flex items-center justify-center gap-[40px] flex-col">
        <Image
          src="https://kanadoc.com/image/headerTitle/charmnewTitle.svg"
          alt="discovery"
          width={1000}
          height={1000}
          className="w-[400px] h-auto"
        />
        <div className="w-full h-fit">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {discoveryItems.map((item, index) => (
                <CarouselItem
                  key={`discovery-item-${index}`}
                  className="basis-1/1 sm:basis-1/3"
                >
                  <Link
                    href={`/charm/${item.id}`}
                    className="w-full h-auto flex flex-col gap-3"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover rounded-[10px]"
                      unoptimized
                    />
                    <h3 className="font-bold text-[16px]">{item.title}</h3>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden xl:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <Link
          href="https://www.kanagawa-kankou.or.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://kanadoc.com/image/image/kanagawa_logo.jpg"
            alt="kanagawa_logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-[10px] border-[1px] border-[#3F96F5]"
            unoptimized
          />
        </Link>
      </div>
    </section>
  );
};

export default DiscoverySection;
