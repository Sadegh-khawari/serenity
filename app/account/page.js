import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <div className="space-y-6">
      <div className="bg-primary-800/50 p-6 rounded-lg">
        <h2 className="font-semibold text-2xl md:text-3xl text-accent-400 mb-3">
          Welcome, {firstName}
        </h2>
        <p className="text-primary-200 text-base md:text-lg">
          Manage your bookings and account settings from your personal
          dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary-800/50 p-6 rounded-lg">
          <h3 className="font-semibold text-xl text-accent-400 mb-3">
            Quick Actions
          </h3>
          <ul className="space-y-2 text-primary-200">
            <li>• View your upcoming reservations</li>
            <li>• Update your profile information</li>
            <li>• Check your booking history</li>
          </ul>
        </div>

        <div className="bg-primary-800/50 p-6 rounded-lg">
          <h3 className="font-semibold text-xl text-accent-400 mb-3">
            Need Help?
          </h3>
          <p className="text-primary-200">
            Our support team is available 24/7 to assist you with any questions
            about your bookings or account.
          </p>
        </div>
      </div>
    </div>
  );
}
