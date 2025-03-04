import Heading from "@/components/shared/Heading";
import ProductsCard from "./ProductsCard";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default async function PopularProducts() {
    const productsData = await dbConnect(collectionName.products).find().limit(8).toArray();

    return (
        <div className="container mx-auto mb-24">
            <Heading center content={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "} max title={"Browse Our Products"} subTitle={`Popular Products`} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10  ">
                {
                    productsData.map(product => <ProductsCard key={product._id} product={product} />)
                }
            </div>
            <div className="flex justify-center">
                <Button
                    sx={{
                        padding: "10px 20px",
                        border: "2px solid #FF3811",
                        color: "#FF3811",
                        fontWeight: 700,
                        borderRadius: "8px",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        "&:hover": {
                            backgroundColor: "#FF3811",
                            color: "white",
                            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                        },
                    }}
                    variant="outlined"
                >
                    More Services <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
            </div>
        </div>
    );
};

