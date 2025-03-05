import { Phone, LocationOn, Schedule } from "@mui/icons-material";

export default function InfoSection() {
    return (
        <section className="container my-24 bg-[#151515] rounded-lg mx-auto text-white py-24 md:pl-3 lg:px-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left justify-items-center ">
                {/* Opening Hours */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="bg-[#FF3811] p-3 rounded-full">
                        <Schedule className="text-white" fontSize="large" />
                    </div>
                    <div>
                        <p className="text-sm sm:text-base text-gray-300 font-medium">We are open Monday-Friday</p>
                        <p className="text-lg sm:text-xl font-bold">7:00 AM - 9:00 PM</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="bg-[#FF3811] p-3 rounded-full">
                        <Phone className="text-white" fontSize="large" />
                    </div>
                    <div>
                        <p className="text-sm sm:text-base text-gray-300 font-medium">Have a question?</p>
                        <p className="text-lg sm:text-xl font-bold">+2546 251 2658</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="bg-[#FF3811] p-3 rounded-full">
                        <LocationOn className="text-white" fontSize="large" />
                    </div>
                    <div>
                        <p className="text-sm sm:text-base text-gray-300 font-medium">Need a repair? Our address</p>
                        <p className="text-lg sm:text-xl font-bold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
