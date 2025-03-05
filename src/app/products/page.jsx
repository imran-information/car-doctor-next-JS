import Heading from "@/components/shared/Heading";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import ProductsCard from "../components/ProductsCard";


export default async function Products() {
    const productsData = await dbConnect(collectionName.products).find().toArray();

    return (
        <div className="pt-24 px-5 xl:px-0 min-h-screen container mx-auto">
            <Heading center content={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "} max title={"Browse Our Products"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10  ">
                {
                    productsData.map(product => <ProductsCard key={product._id} product={product} />)
                }
            </div>

        </div>
    );
};

