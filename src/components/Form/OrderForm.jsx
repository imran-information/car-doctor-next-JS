"use client";
import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import { toast } from "material-react-toastify";
import { useRouter } from "next/navigation";

const OrderForm = ({ serviceData }) => {
    const { data: session } = useSession();
    const router = useRouter()
    const [formData, setFormData] = useState({
        customerName: session?.user?.name,
        price: serviceData?.price || "",
        phone: "",
        email: session?.user?.email,
        message: "",
        address: "",
        date: new Date().toISOString().split("T")[0],
        serviceId: serviceData._id,
        serviceName: serviceData.title,
        serviceImg: serviceData.img,
    });

    useEffect(() => {
        if (session) {
            setFormData((prev) => ({
                ...prev,
                customerName: session?.user?.name || "",
                email: session?.user?.email || "",
            }));
        }
    }, [session]);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.customerName.trim()) newErrors.customerName = "Name is required.";
        if (!formData.price.toString().trim()) newErrors.price = "Price is required.";
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\+?(\d[\d-.()\s]*){7,15}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number (7-15 digits).";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (!formData.date.trim()) newErrors.date = "Date is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            toast.info("Order submitting....!");
            setFormData({
                customerName: session?.user?.name || "",
                price: serviceData?.price || "",
                phone: "",
                email: session?.user?.email || "",
                message: "",
                address: "",
                date: new Date().toISOString().split("T")[0], // Reset date to today
            });

            const response = await fetch("https://car-doctor-next-js.vercel.app/api/service", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            const postedData = await response.json();
            if (postedData.insertedId) {
                toast.success("Order Confirmed.!");
                router.push("/myBookings")
            }
            setErrors({});
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
                        Confirm Order
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default OrderForm;
