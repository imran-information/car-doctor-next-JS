import OrderForm from "@/components/Form/OrderForm";
import TopBanner from "@/components/shared/TopBanner";

export default async function CheckoutPage({ params }) {
    const p = await params;
    const response = await fetch(`http://localhost:3000/api/service/${p.id}`)
    const serviceData = await response.json()

    return <div className="container mx-auto my-32 mb-0 overflow-x-hidden min-h-screen">
        {/* Service Top Banner Section */}
        <TopBanner pageName={"Check Out"} pageContent={"Checkout"} />

        {/* Order Form  */}
        <OrderForm serviceData={serviceData} />
    </div>
}