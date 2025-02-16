import Image from "next/image";
import checkoutImage from "../../../../public/assets/images/checkout/checkout.png";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import { ObjectId } from "mongodb";
import { Box, Button, Typography } from "@mui/material";

export default async function ServiceDetailsPage({ params }) {
    const serviceId = await params.id;
    const serviceData = await dbConnect(collectionName.services).findOne({ _id: new ObjectId(serviceId) });
    const { title, img, price, _id, description, facility } = serviceData;
    console.log(img);
    const services = [
        { name: "Full Car Repair", active: true },
        { name: "Engine Repair", active: false },
        { name: "Automatic Services", active: false },
        { name: "Engine Oil Change", active: false },
        { name: "Battery Charge", active: false },
    ];

    return (
        <div className="w-4/5 mx-auto my-32 overflow-x-hidden">
            {/* Service Top Banner Section */}
            <section>
                <figure className="relative w-full h-[350px] rounded-lg overflow-hidden">
                    {/* Background Image */}
                    <Image src={checkoutImage} alt="Service Details" className="object-cover" fill />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-transparent rounded-lg"></div>

                    {/* Text Overlay */}
                    <div className="absolute top-[40%] left-10 md:left-20">
                        <h3 className="text-3xl md:text-5xl font-bold text-white">Service Details</h3>
                    </div>

                    {/* Red Banner */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-center">
                        <h4
                            className="text-white font-medium text-xl bg-[#FF3811] py-3 px-10 rounded-[10px_100px_0px_100px/120px_100px_0px_100px]"
                        >
                            Home / Service Details
                        </h4>
                    </div>
                </figure>
            </section>

            {/* Service Details Section */}
            <section className="my-10">
                <div className="grid grid-cols-12 gap-4">
                    {/* Left Content Section */}
                    <div className="col-span-12 md:col-span-9 my-8">

                        {/* Service Image */}
                        <div className="relative w-full h-[430px] overflow-hidden rounded-lg">
                            <div className="relative w-full h-[430px]">
                                <Image
                                    src="https://i.ibb.co/wh7t3N3/555.jpg"
                                    alt="Service"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>

                        <h2 className="text-4xl font-bold text-[#151515] my-6">{title}</h2>
                        <p className="text-lg text-[#555555] mb-4">{description}</p>

                        {/* Facility Cards */}
                        <div className="grid md:grid-cols-2 gap-6 my-16">
                            {facility.map((fac, index) => (
                                <div key={index} className="relative w-full  h-[204px] bg-[#F3F3F3] border-t-2 border-[#FF3811] rounded-lg p-8">
                                    <h3 className="font-bold text-2xl text-[#444444]">{fac.name}</h3>
                                    <p className="text-base text-[#737373] capitalize mt-2">{fac.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="col-span-12 md:col-span-3 my-8">
                        {/* Services List */}
                        <div className="w-full max-w-[364px] bg-[#F3F3F3] rounded-lg p-6 space-y-4">
                            <h3 className="text-2xl font-bold text-[#151515]">Services</h3>
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-lg font-semibold border ${service.active ? "bg-[#FF3811] text-white border-[#FF3811]" : "bg-white text-[#151515] border-[#FF3811]"
                                        }`}
                                >
                                    {service.name}
                                    <div
                                        className={`w-6 h-6 flex items-center justify-center border rounded ${service.active ? "border-white" : "border-[#FF3811]"
                                            }`}
                                    >
                                        ✓
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Download Section */}
                        <div className="relative w-full max-w-[364px] h-[262px] bg-[#151515] rounded-lg p-6 mt-9">
                            <p className="font-bold text-[25px] text-white">Download</p>
                            {/* Brochure */}
                            <div className="mt-6 flex items-center gap-3">
                                <DescriptionIcon className="text-white text-[24px]" /> {/* Start Icon */}
                                <div className="flex-1">
                                    <p className="font-semibold text-[18px] text-white">Our Brochure</p>
                                    <p className="text-[16px] text-[#A2A2A2]">Download</p>
                                </div>
                                <div className="bg-[#FF3811] p-2 rounded-lg inline-block">
                                    <DownloadIcon className="text-white cursor-pointer hover:text-gray-300" sx={{ fontSize: 30 }} />
                                </div>
                            </div>

                            {/* Company Details */}
                            <div className="mt-4 flex items-center gap-3">
                                <DescriptionIcon className="text-white text-[24px]" /> {/* Start Icon */}
                                <div className="flex-1">
                                    <p className="font-semibold text-[18px] text-white">Company Details</p>
                                    <p className="text-[16px] text-[#A2A2A2]">Download</p>
                                </div>
                                <div className="bg-[#FF3811] p-2 rounded-lg inline-block">
                                    <DownloadIcon className="text-white cursor-pointer hover:text-gray-300" sx={{ fontSize: 30 }} />
                                </div>
                            </div>
                        </div>
                        <Box
                            sx={{
                                textAlign: "center",
                                backgroundColor: "#151515",
                                padding: "50px 20px",
                                borderRadius: "10px", // Rounded corners
                                border: "2px solid #FF3811", // Red border
                                marginTop: "30px",
                            }}
                        >
                            {/* Main Title */}
                            <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: "36px", color: "#151515" }}>
                                Car Doctor
                            </Typography>

                            {/* Subheading */}
                            <Typography variant="h5" sx={{ marginTop: "10px", color: "#555" }}>
                                Need Help? We Are Here To Help You
                            </Typography>

                            {/* Special Offer */}
                            <Typography variant="h4" sx={{ marginTop: "20px", color: "#FF3811", fontWeight: "bold" }}>
                                Car Doctor Special
                            </Typography>

                            {/* Discount */}
                            <Typography variant="h6" sx={{ marginTop: "10px", color: "#737373" }}>
                                Save up to 60% off
                            </Typography>

                            {/* Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    marginTop: "30px",
                                    backgroundColor: "#FF3811",
                                    padding: "10px 20px",
                                    borderRadius: "30px",
                                    fontSize: "16px",
                                    textTransform: "none",
                                }}
                            >
                                Get A Quote
                            </Button>
                        </Box>
                    </div>

                </div>
            </section>
        </div>
    );
}
