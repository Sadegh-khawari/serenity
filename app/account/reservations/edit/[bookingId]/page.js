import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = params;
  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-xl sm:text-2xl text-accent-400 mb-4 sm:mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-primary-900 py-6 px-4 sm:py-8 sm:px-12 text-base sm:text-lg flex gap-4 sm:gap-6 flex-col rounded-lg"
      >
        <input type="hidden" value={bookingId} name="bookingId" />
        <div className="space-y-2">
          <label htmlFor="numGuests" className="block text-primary-200">
            How many guests?
          </label>
          <select
            name="numGuests"
            defaultValue={numGuests}
            id="numGuests"
            className="px-4 sm:px-5 py-2.5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-base sm:text-lg"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations" className="block text-primary-200">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-4 sm:px-5 py-2.5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-base sm:text-lg min-h-[100px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-4 sm:gap-6 mt-2">
          <SubmitButton pendingLabel="Updating..." className="w-full sm:w-auto">
            Update Reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
