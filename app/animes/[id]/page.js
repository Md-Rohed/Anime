import {
  fetchAnimeDetails,
} from "@/app/action";
import Image from "next/image";

async function Animes({ params }) {
  const data = await fetchAnimeDetails(params.id);


  return (
    <div className="pt-[3rem] px-[1.25rem] md:px-[3.25rem] lg:px-[7.25rem]">
      <div className="flex flex-col md:flex-row justify-between gap-[2rem] pb-[2rem] ">
        <div className="flex gap-2">
          <div className="w-full">
            <Image
              src={`https://shikimori.one${data.image.original}`}
              alt={data.name}
              height={500}
              width={500}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="w-full md:w-[70%]">
          <h1 className="font-bol text-[3rem]">{data.name}</h1>
          <p className="pt-[2rem]">{data.description}</p>
        </div>
      </div>

      <hr />
    
    </div>
  );
}

export default Animes;
