import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Card from "../../components/Card";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { FormFlightSearch } from "./FormFlightSearch";
import { FlightTicketProps } from "./FlightResult";

import {flightData} from "../../utils/dummyData";
import { useNavigate } from "react-router";

interface FlightSearchProps {
    onSearch: (flightResults:FlightTicketProps[]) => void;
}

const FlightSearch: React.FC<FlightSearchProps> = ({onSearch}) => {
    const navigate = useNavigate(); 


    const handleSearch = (origin:String,destination:String,passengers:number,departureDate:Date) => {
        if (!origin || !destination || !departureDate) {
            toast.error("Asal dan tujuan tidak boleh kosong!");
            return;
        }
        if (passengers <= 0) {
            toast.error("Jumlah penumpang tidak boleh kurang dari 1!");
            return;
        }
        if (flightData.length > 0) {
            const filteredResults : FlightTicketProps[] = flightData.filter((flight:FlightTicketProps) => {
                return (
                    flight.from.toLowerCase() === origin.toLowerCase() &&
                    flight.to.toLowerCase() === destination.toLowerCase()
                    // NOTE : bisa dikembangkan nanti di tambah kalender , di dummy cuma ini
                );
            })
            if (filteredResults.length === 0) {
                toast.error("Tidak ada penerbangan yang ditemukan!");
                return;
            }
            onSearch(filteredResults);
            navigate("/result", { replace: true });
        }else {
            toast.error("Tidak ada penerbangan yang ditemukan!");
            return;
        }
        toast.success("Pencarian berhasil!");
    };

    return (
        <div className="bg-blue-500 rounded-xl p-2 relative flex flex-col justify-between items-center min-h-[300px] w-[800px]">
            <Toaster />
            <h1 className="text-white text-xl m-2 self-start">Pesan Tiket Pesawat</h1>
            <Card color="bg-white" minWidth="w-full" minHeight="min-h-[260px]" flexDirection="flex-col" gap="gap-2" padding="p-4">
                <FormFlightSearch onSearch={handleSearch} >
                <div className="self-end mr-4 mb-4">
                    <Button value="Cari" color="orange" minWidth="min-w-[200px]" />
                </div>
                </FormFlightSearch>
            </Card>
        </div>
    );
};

export default FlightSearch;