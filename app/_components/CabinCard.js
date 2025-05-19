import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border-primary-800 border">
      <div className="relative h-[200px] sm:h-auto sm:flex-1">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-b sm:border-b-0 sm:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow">
        <div className="p-5 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-primary-200">Up to {maxCapacity} guests</span>
          </div>

          <div className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </div>
        </div>

        <div className="bg-primary-950 border-t border-b border-primary-800">
          <Link
            href={`/cabins/${id}`}
            className="block py-4 px-6 text-center hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
