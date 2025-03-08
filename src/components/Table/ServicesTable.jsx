import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import Image from 'next/image';
import { Edit } from '@mui/icons-material';
import BookingDeleteButton from '@/app/myBookings/components/BookingDeleteButton';
import Link from 'next/link';

export default function ServicesTable({ myBookings = [] }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB').replace(/\//g, '-');
    };
    return (
        <TableContainer component={Paper} className="shadow-lg rounded-lg mt-5">
            <Table>
                <TableHead className="bg-gray-500">
                    <TableRow >
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Image</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Product</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Details</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Update</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Cenacle</TableCell>
                    </TableRow>


                </TableHead>
                <TableBody>
                    {myBookings.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">
                                No bookings available.
                            </TableCell>
                        </TableRow>
                    ) : (
                        myBookings.map(item => {
                            return (
                                <TableRow key={item._id}>
                                    <TableCell>
                                        {item.serviceImg ? (
                                            <Image
                                                src={item.serviceImg}
                                                alt={item.serviceName || 'Service Image'}
                                                width={80}
                                                height={50}
                                                className="rounded-lg"
                                                quality={100}
                                                unoptimized={true}
                                            />
                                        ) : (
                                            <span>No Image Available</span>
                                        )}
                                    </TableCell>

                                    <TableCell className="font-semibold">
                                        {item.serviceName || 'No Service Name Available'}
                                    </TableCell>

                                    <TableCell>{item.message || 'No message provided'}</TableCell>

                                    <TableCell className="font-semibold text-gray-700">
                                        ${item.price || 'N/A'}
                                    </TableCell>

                                    <TableCell className="font-semibold text-gray-700">
                                        {item.date ? formatDate(item.date) : '20-12-2025'}
                                    </TableCell>

                                    <TableCell>
                                        <Button sx={{ color: "white", backgroundColor: '#FF3811' }} variant="contained" className="rounded-lg">
                                            Pending
                                        </Button>
                                    </TableCell>

                                    <TableCell>
                                        <Link href={`/myBookings/${item._id}`}>
                                            <IconButton
                                                className=" bg-[#FF3811] text-white flex items-center justify-center rounded-full font-bold"
                                                sx={{
                                                    backgroundColor: "#FF3811",
                                                    color: "white",
                                                    width: 40,
                                                    height: 40,
                                                    "&:hover": { backgroundColor: "#d32f2f" }
                                                }}
                                            >
                                                <Edit />
                                            </IconButton>
                                        </Link>
                                    </TableCell>

                                    <TableCell>
                                        <BookingDeleteButton id={item._id} />
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    )}

                </TableBody>
            </Table>
        </TableContainer>
    );
};

