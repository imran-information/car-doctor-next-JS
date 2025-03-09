"use client";

import { TextField, Button, Box, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import { toast } from "material-react-toastify";
import { useRouter } from "next/navigation";

const BookingUpdateForm = ({ bookingData }) => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        toast.info("Updating booking...");
        const formData = {
            phone: form.phone.value,
            message: form.message.value,
            address: form.message.value,
            date: new Date(form.date.value).toISOString().split("T")[0],
        }

        console.log(formData);
        const response = await fetch(`/api/myBookings/${bookingData._id}`, {
            method: "PATCH",
            body: JSON.stringify(formData),
        });

        const updatedData = await response.json();
        // console.log(updatedData);

        if (updatedData.modifiedCount) {
            toast.success("Booking updated successfully!");
            router.push("/myBookings");
        } else {
            toast.error("Error updating booking.");
        }

    };

    return (
        <div className="my-10">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    backgroundColor: "#F3F3F3",
                    padding: 5,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Grid container spacing={2}>
                    {/* Name */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className="bg-white"
                            label="Name"
                            name="customerName"
                            variant="outlined"
                            fullWidth
                            required
                            value={bookingData.customerName}
                            sx={{
                                "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#FF3811" } },
                                "& .MuiInputLabel-root": { color: "#000" },
                                "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                            }}
                        />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className="bg-white"
                            label="Email"
                            name="email"
                            variant="outlined"
                            fullWidth
                            required
                            type="email"
                            value={bookingData.email}
                            sx={{
                                "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#FF3811" } },
                                "& .MuiInputLabel-root": { color: "#000" },
                                "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                            }}
                        />
                    </Grid>

                    {/* Price */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className="bg-white"
                            label="Price"
                            name="price"
                            variant="outlined"
                            fullWidth
                            required
                            value={bookingData.price}
                            sx={{
                                "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#FF3811" } },
                                "& .MuiInputLabel-root": { color: "#000" },
                                "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                            }}
                        />
                    </Grid>
                    {/* Date */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className="bg-white"
                            label="Order Date"
                            name="date"
                            variant="outlined"
                            fullWidth
                            required
                            type="date"
                            defaultValue={bookingData.date}
                            sx={{
                                "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#FF3811" } },
                                "& .MuiInputLabel-root": { color: "#000" },
                                "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                            }}
                        />
                    </Grid>
                    {/* Phone Number */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className="bg-white"
                            label="Phone Number"
                            name="phone"
                            variant="outlined"
                            fullWidth
                            required
                            type="tel"
                            defaultValue={bookingData.phone}
                            sx={{
                                "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#FF3811" } },
                                "& .MuiInputLabel-root": { color: "#000" },
                                "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                            }}
                        />
                    </Grid>
                    {/* Address */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className="bg-white"
                            label="Address"
                            name="address"
                            variant="outlined"
                            fullWidth
                            required
                            defaultValue={bookingData.address}
                            sx={{
                                "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#FF3811" } },
                                "& .MuiInputLabel-root": { color: "#000" },
                                "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                            }}
                        />
                    </Grid>

                    {/* Message */}
                    <Grid item xs={12}>
                        <TextField
                            className="bg-white"
                            label="Your Message"
                            name="message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            required
                            defaultValue={bookingData.message}
                            sx={{
                                "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#FF3811" } },
                                "& .MuiInputLabel-root": { color: "#000" },
                                "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Submit Button */}
                <Box textAlign="center" mt={3}>
                    <Button type="submit" variant="contained" sx={{ width: "100%", backgroundColor: "#FF3811" }}>
                        Update Booking
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default BookingUpdateForm;
