"use client"
import { CancelOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { toast } from "material-react-toastify";
import { useRouter } from "next/navigation";

export default function BookingDeleteButton({ id }) {
    const router = useRouter()
    const handleDeleteBooking = async (id) => {
        toast.info('Booking Service Deleting...! ')
        const response = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: "DELETE"
        })
        const deletedResult = await response.json()
        router.refresh()
        toast.success('Booking Service Deleted!')
    }
    return (
        <>
            <IconButton onClick={() => handleDeleteBooking(id)}
                className=" bg-[#FF3811] text-white flex items-center justify-center rounded-full font-bold"
                sx={{
                    backgroundColor: "#FF3811",
                    color: "white",
                    width: 40,
                    height: 40,
                    "&:hover": { backgroundColor: "#d32f2f" }
                }}
            >
                <CancelOutlined />
            </IconButton>
        </>
    );
};

;