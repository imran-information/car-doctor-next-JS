import { Phone, LocationOn, Schedule } from "@mui/icons-material";

export default function InfoSection() {
    return (
        <section className="container my-24 h-[250px] bg-[#151515] rounded-lg mx-auto flex justify-around items-center text-white p-6">
            {/* Opening Hours */}
            <div className="flex items-center gap-4">
                <div className="bg-[#FF3811] p-3 rounded-full">
                    <Schedule className="text-white" fontSize="large" />
                </div>
                <div>
                    <p className="text-base text-gray-300 font-medium">We are open Monday-Friday</p>
                    <p className="text-xl font-bold">7:00 AM - 9:00 PM</p>
                </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4">
                <div className="bg-[#FF3811] p-3 rounded-full">
                    <Phone className="text-white" fontSize="large" />
                </div>
                <div>
                    <p className="text-base text-gray-300 font-medium">Have a question?</p>
                    <p className="text-xl font-bold">+2546 251 2658</p>
                </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
                <div className="bg-[#FF3811] p-3 rounded-full">
                    <LocationOn className="text-white" fontSize="large" />
                </div>
                <div>
                    <p className="text-base text-gray-300 font-medium">Need a repair? Our address</p>
                    <p className="text-xl font-bold">Liza Street, New York</p>
                </div>
            </div>
        </section>
    );
}
