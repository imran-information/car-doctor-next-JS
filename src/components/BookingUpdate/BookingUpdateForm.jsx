"use client";
import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import { toast } from "material-react-toastify";
import { useRouter } from "next/navigation";

const BookingUpdateForm = ({ bookingData }) => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.info("Updating booking..."); 
        const formData = {
            customerName: session?.user?.name,
            email: session?.user?.email,
            price: bookingData?.price,
            phone: "",
            message: "",
            address: "",
            date: bookingData?.date || new Date().toISOString().split("T")[0],
        }
        
        const response = await fetch(`/api/bookings/${bookingData._id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const updatedData = await response.json();
        if (updatedData.success) {
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
                            value={formData.customerName}
                            error={!!errors.customerName}
                            helperText={errors.customerName || ""}
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
                            value={formData.email}
                            error={!!errors.email}
                            helperText={errors.email || ""}
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
                            value={formData.price}
                            error={!!errors.price}
                            helperText={errors.price || ""}
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
                            value={formData.date}
                            onChange={handleChange}
                            error={!!errors.date}
                            helperText={errors.date || ""}
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
                            value={formData.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone || ""}
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
                            value={formData.address}
                            error={!!errors.address}
                            helperText={errors.address || ""}
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message || ""}
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
