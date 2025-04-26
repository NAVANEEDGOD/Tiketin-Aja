import React, { use, useEffect } from "react";
import { FaPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Card from "../../components/Card";
import Button from "../../components/Button";

export interface FlightTicketProps {
        id: number;
        airline: string;
        from: string;
        to: string;
        departureTime: string;
        arrivalTime: string;
        price: string;
}

interface FlightResultProps {
    result:FlightTicketProps[];   
}

const FlightResult :React.FC<FlightResultProps>= ({result}) => {
    const [flightResults, setFlightResults] = React.useState<FlightTicketProps[]>([]);
    

    const handleBooking = (airline: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to book a flight with ${airline}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                toast.success("Booking successful!");
            }
        });
    };

    useEffect(() => {
        if (result.length > 0) {
            setTimeout(() => {
                setFlightResults(result);
                toast.success("Flight results loaded successfully!");
            }
            , 2000);
        } else {
            toast.error("No flight results found!");
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Toaster />
            <h1 className="text-2xl font-bold text-center mb-6">Flight Search Results</h1>
            {flightResults.length === 0 ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : (
                <Card color="bg-blue-600" minWidth="w-full" minHeight="min-h-[100px]" flexDirection="flex-col" gap="gap-2" padding="p-4">
                    <div className=" text-white flex justify-between items-center w-full mb-4 p-2">
                        <div>
                            <p className="text-sm text-gray-200">From:</p>
                            <h2 className="text-lg font-semibold">{flightResults[0]?.from}</h2>
                        </div>
                        <div>
                            <p className="text-sm text-gray-200">To:</p>
                            <h2 className="text-lg font-semibold">{flightResults[0]?.to}</h2>
                        </div>
                        <div>
                            <p className="text-sm text-gray-200">Tickets:</p>
                            <h2 className="text-lg font-semibold">{flightResults.length}</h2>
                        </div>
                    </div>
                </Card>
            )}
             
            {flightResults.length <= 0 ? <div className="text-center text-gray-500">Loading...</div>
             :<div className="grid gap-6 mt-4">
                {flightResults.map((flight) => (

                    <Card key={flight.id} color="bg-white" minWidth="min-w-[500px]" minHeight="min-h-[200px]" flexDirection="flex-row" padding="p-4">
                        <div className="flex items-center space-x-6 self-start w-full h-full">
                            <FaPlane className="text-blue-500 text-2xl" />
                            <div>
                                <h2 className="text-lg font-semibold">{flight.airline}</h2>
                                <p className="text-sm text-gray-600">
                                    {flight.departureTime} - {flight.arrivalTime}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-green-600">{flight.price}</p>
                            <Button
                            value="Pesan"
                            color="orange"
                            minWidth="min-w-[100px]"
                            onClick={() => handleBooking(flight.airline)}
                            />
                        </div>
                </Card>
                ))}
                
            </div>

            }
        </div>
    );
};

export default FlightResult;