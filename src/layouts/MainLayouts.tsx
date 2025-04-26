import React, { use } from "react";
import { FaTags, FaClipboardList, FaUserCircle, FaPlane } from "react-icons/fa";
import FlightSearch from "../pages/FlightSearch/FlightSearch";
import FlightResult from "../pages/FlightSearch/FlightResult";
import { FlightTicketProps } from "../pages/FlightSearch/FlightResult";
import { Route, BrowserRouter as Router, Routes, Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MainLayouts: React.FC = () => {
    const [searchResult, setSearchResult] = React.useState<FlightTicketProps[]>([]);
    const dropdownUserAccount = [
        { id: 1, name: "Profile" },
        { id: 2, name: "Settings" },
        { id: 3, name: "Logout" },
    ];
    const [isuserAccountOpen, setIsUserAccountOpen] = React.useState(false);
    const handleSearch = (result:FlightTicketProps[]) => {
        setSearchResult(result);
        console.log(result);
    }

    const handleUserAccount = () => {
        // Handle user account logic here
        console.log("User account clicked");
        isuserAccountOpen ? setIsUserAccountOpen(false) : setIsUserAccountOpen(true);
    }

    const handleUserAccountSelect = (item: { id: number; name: string }) => {
        console.log(`Selected user account option: ${item.name}`);
        if (item.name === "Logout") {
            // Handle logout logic here
            console.log("User logged out");
            Swal.fire({
                title: "Are you sure?",
                text: "You will be logged out!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logout!",
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log("User confirmed logout");
                }
            });
        }
    
    }

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Header */}
            <header className="bg-blue-500 text-white">
                <div className="container mx-auto flex flex-col py-4 px-6">
                    {/* Top Header */}
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold">Tiketin Aja</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-6">
                            <span className="flex items-center cursor-pointer hover:underline">
                                <FaTags className="mr-2" />
                                Promo
                            </span>
                            <span className="flex items-center cursor-pointer hover:underline">
                                <FaClipboardList className="mr-2" />
                                Pesanan
                            </span>
                        </div>
                        <div>
                            <span onClick={()=>handleUserAccount()} className="flex items-center cursor-pointer hover:underline">
                                <FaUserCircle className="mr-2" />
                                User Account
                            </span>
                            {isuserAccountOpen && (
                                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48 z-10">
                                    <ul className="py-2">
                                        {dropdownUserAccount.map((item) => (
                                            <li key={item.id} className="text-blue-500 px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() =>handleUserAccountSelect(item)}>
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Navigation Bar */}
                <nav className="bg-blue-600">
                    <div className="container mx-auto flex justify-start items-center py-2 px-6">
                        <span className="flex items-center cursor-pointer hover:underline text-white font-semibold">
                            <FaPlane className="mr-2" />
                            Tiket Pesawat
                        </span>
                    </div>
                </nav>
            </header>

            <div className="flex flex-col items-center justify-center bg-gray-100 min-h-[80dvh]">
            <Router>
                <Routes>
                    <Route path="/search" element={<FlightSearch onSearch={handleSearch} />} />
                    <Route path="/result" element={<FlightResult result={searchResult} />} />
                    <Route path="*" element={<Navigate to="/search" replace />} />
                </Routes>
            </Router>
            </div>
        </div>
    );
};

export default MainLayouts;