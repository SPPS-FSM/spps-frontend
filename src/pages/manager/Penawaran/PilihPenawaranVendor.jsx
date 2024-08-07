import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import SidebarAdmin from "../../../components/admin/sidebar";
import NavbarAdmin from "../../../components/admin/navbar";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import SidebarDekan from "../../../components/supplier/sidebar";
import NavbarSupplier from "../../../components/supplier/navbar";
import { TableUploadDocument } from "../../../components/supplier/tableUploadDocument";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import SidebarSupplier from "../../../components/supplier/sidebar";
import SidebarManager from "../../../components/manager/sidebar";
import NavbarManager from "../../../components/manager/navbar";

export default function PilihPenawaranVendor() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(result);
  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen font-m-plus-rounded">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarManager />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarManager
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Pilih Penawaran</div>
            <a href="/manager/list-penawaran">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form action="" className="p-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kode Penawaran
            </label>
            <input
              value={"A101"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Vendor
            </label>
            <input
              value={"PT Mangosteen"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              PIC Vendor
            </label>
            <input
              value={"Farhan"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              No Telephone
            </label>
            <input
              value={"085710116209"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              ID Product
            </label>
            <input
              value={"2"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tangal Dibuat Penawaran
            </label>
            <input
              value={"04/07/2024"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Mulai Penawaran
            </label>
            <input
              value={"04/07/2024"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tangal Berakhir Penawaran
            </label>
            <input
              value={"04/07/2025"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Payment
            </label>
            <input
              value={"CBD"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Delivery
            </label>
            <input
              value={"CPT"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Description
            </label>
            <textarea
              value={"."}
              className="border w-full h-20 my-1 text-gray-700 border-gray-300 rounded px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Status Vendor
            </label>
            <input
              value={"Terverifikasi"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Status Penawaran
            </label>
            <input
              value={"Berlaku"}
              type="text"
              className="text-gray-700 border border-gray-300 rounded w-full h-8 my-1 px-1 bg-gray-200"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Status Proses Penawaran
            </label>
            <select name="" id="" className="w-full border h-8 my-1">
              <option value="Dipilih Staff">Dipilih Manager</option>
              <option value="Dipilih Manager">Ditolak Manager</option>
            </select>
            <div className="pt-4 flex justify-end">
              <Button color="green">Submit</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
