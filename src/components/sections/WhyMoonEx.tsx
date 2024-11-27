import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Check, X } from "lucide-react";

import { tableData } from "@/constants";
import Logo from "../self/LogoMoonex";
import LogoUniswap from "../self/LogoUniswap";

const WhyMoonEx = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 font-fira">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-white text-4xl font-bold ">
          Why<span className="text-yellow-300 "> MoonEx </span>?
        </h2>
      </div>
      <div className="mt-16 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 p-10">
        <Table>
          <TableHeader>
            <TableRow className="w-full hover:bg-transparent">
              <TableHead className="border-r border-slate-600 w-[33%] text-center text-3xl py-5 font-bold text-yellow-300">Comparison</TableHead>
              <TableHead className="border-r border-slate-600 w-[33%] text-center text-3xl py-5 font-bold"><Logo/></TableHead>
              <TableHead className="w-[33%] text-center text-3xl py-5 font-bold"><LogoUniswap/></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-white">
            {tableData.map((row, index) => (
              <TableRow key={index} className="group hover:bg-transparent">
                <TableCell className= "opacity-100 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-300 text-center py-5 border-r border-slate-600">{row.column1}</TableCell>
                <TableCell className="opacity-100 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-300 border-r border-slate-600">
                  <div className="flex justify-center ">
                    <Check className="text-green-300 font-bold size-9"/>
                  </div>
                </TableCell>
                <TableCell className="opacity-100 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-300 ">
                  <div className="flex justify-center">
                    <X className="text-red-500 font-bold size-9"/>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default WhyMoonEx;
