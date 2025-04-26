import React, { FormEventHandler } from "react";
import { Input } from "../../components/Input";
import { useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaUser } from "react-icons/fa";


interface FormFlightSearchProps {
    onSearch: (origin: string, destination: string, passengers: number, departureDate: Date) => void; 
    children?: React.ReactNode;
}

const semuaKota = [
    "Jakarta", "Surabaya", "Bali", "Bandung", "Medan", "Makassar", "Yogyakarta", "Semarang", "Palembang", "Batam",
    "Denpasar", "Banjarmasin", "Ambon", "Kupang", "Manado", "Pekanbaru", "Balikpapan", "Mataram", "Jambi",
    // Add more cities as needed
];

export const FormFlightSearch :React.FC<FormFlightSearchProps> = ({onSearch , children}) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState<Date>(new Date());
    const [passengers, setPassengers] = useState(1);

    
    return (
        
            <form onSubmit={(e) => { e.preventDefault(); onSearch(origin, destination, passengers, departureDate); }} className="flex flex-col gap-4 p-4">
                <tbody className="flex flex-row gap-4 p-4">
                        <tr className="grid grid-cols-2 gap-4">
                            <td className="flex flex-col gap-2 gri">
                                <Input type="dropdown" icon={<FaPlaneDeparture />} placeholder="Asal" option={semuaKota} value={origin} onChange={(e) => setOrigin(e.target.value)}/>                
                            </td>
                            <td className="flex flex-col gap-2 ">
                                <Input type="dropdown" icon={<FaPlaneArrival />} placeholder="Tujuan" option={semuaKota} value={destination} onChange={(e) => setDestination(e.target.value)}/>
                            </td>
                            <td className="flex flex-col gap-2 ">
                                <Input type="number" icon={<FaUser />} placeholder="Jumlah Penumpang" value={String(passengers)} onChange={(e) => setPassengers(Number(e.target.value))}/>
                            </td>
                        </tr>
                        <tr className="flex flex-row gap-2">
                            <td className="flex flex-col gap-2">
                                <Input type="date" icon={<FaUser />} placeholder="Tanggal Keberangkatan" value={departureDate.toISOString().split('T')[0]} onChange={(e) => setDepartureDate(new Date(e.target.value))}/>
                            </td>
                        </tr>
                </tbody>
                {children}
            </form>
        
    );
}