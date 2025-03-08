import Image from "next/image";
import checkoutImage from "../../../public/assets/images/checkout/checkout.png";
export default function TopBanner({ pageName, pageContent }) {


    return (
        <section>
            <figure className="relative w-full h-[350px] rounded-lg overflow-hidden">
                {/* Background Image */}
                <Image src={checkoutImage} alt="Service Details" className="object-cover" fill />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-transparent rounded-lg"></div>

                {/* Text Overlay */}
                <div className="absolute top-[40%] left-10 md:left-20">
                    <h3 className="text-3xl md:text-5xl font-bold text-white">{pageName}</h3>
                </div>

                {/* Red Banner */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center">
                    <h4
                        className="text-white font-medium text-xl bg-[#FF3811] py-3 px-10 rounded-[10px_100px_0px_100px/120px_100px_0px_100px]"
                    >
                        Home/{pageContent}
                    </h4>
                </div>
            </figure>
        </section >

    )

}