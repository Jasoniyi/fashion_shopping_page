"use client";
import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import { Jarkarta } from "../Fonts/Fonts";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import { paymentOptions } from "@/constants/constants";
import OrderSummary from "./orderSummary";

const page = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioBtnChange = (optionValue: any) => {
    setSelectedValue(optionValue);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className={Jarkarta.className}>
      <div className="bg-other_banner">
        <div className="py-32 px-16">
          <Navbar />
        </div>
      </div>
      <div className="my-28 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 h-fit">
            <div className="flex flex-col space-y-8">
              <div className="text-sm">
                <h3 className="text-sm py-6 font-semibold">
                  Billing Information
                </h3>
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 text-sm text-gray-600">
                  <div className="flex-1 flex flex-col space-y-2">
                    <span className="">User name</span>
                    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                      <TextField
                        id="outlined-basic"
                        label="First name"
                        variant="outlined"
                        autoComplete="true"
                        size="small"
                      />

                      <TextField
                        id="outlined-basic"
                        label="Last name"
                        variant="outlined"
                        autoComplete="true"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <span className="">Company name</span>
                    <TextField
                      id="outlined-basic"
                      label="Company name"
                      variant="outlined"
                      autoComplete="true"
                      size="small"
                    />
                  </div>
                </div>
                <div className="py-4 flex flex-col space-y-2 text-gray-600">
                  <span className="">Address</span>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    autoComplete="true"
                    size="small"
                  />
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 text-gray-600">
                  <div className="flex-1 flex flex-col space-y-2">
                    <span className="">Country</span>
                    <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">
                        Select...
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Select..."
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <span className="">State/Region</span>
                    <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">
                        Select...
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Select..."
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <span className="">City</span>
                    <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">
                        Select...
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Select..."
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <span className="">Zip code</span>
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      autoComplete="true"
                      size="small"
                    />
                  </div>
                </div>
                <div className="py-4 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 text-gray-600">
                  <div className="flex-1 flex flex-col space-y-2 ">
                    <span className="">Email</span>
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      autoComplete="true"
                      size="small"
                      type="email"
                    />
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <span className="">Phone Number</span>
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      autoComplete="true"
                      size="small"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Checkbox {...label} />
                  <span className="">Ship to different address</span>
                </div>
              </div>
              <div className="border-[1px] border-gray-100 ">
                <h3 className="px-8 text-sm py-3 font-semibold">
                  Payment Option
                </h3>
                <div className="border-[1px] border-gray-100">
                  <div className="flex flex-col md:flex-row py-5 items-center">
                    {paymentOptions.map((option, i) => (
                      <div
                        className={`flex-1 flex flex-col items-center space-y-4 md:space-y-2 ${
                          i !== 4 ? "md:border-r-[1px]" : ""
                        }`}
                        key={`paymentOptions-${i}`}
                      >
                        <div className="">
                          <Image
                            src={option.src}
                            alt={option.alt}
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="text-xs">{option.title}</div>
                        <div className="pb-5 md:pb-0">
                          <input
                            type="radio"
                            checked={selectedValue === i}
                            onChange={() => handleRadioBtnChange(i)}
                            name="radio-buttons"
                            aria-label={option.title}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-4 pt-8 flex flex-col text-sm space-y-4">
                  <div className="flex flex-col space-y-2">
                    <span className="">Name on Card</span>
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      autoComplete="true"
                      size="small"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="">Card Number</span>
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      autoComplete="true"
                      size="small"
                    />
                  </div>
                  <div className="flex space-x-6 pb-6">
                    <div className="flex-1 flex flex-col">
                      <span className="">Expire Date</span>
                      <TextField
                        id="outlined-basic"
                        label="DD/YY"
                        variant="outlined"
                        autoComplete="true"
                        size="small"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <span className="">CVC</span>
                      <TextField
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        autoComplete="true"
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3>Additional Information</h3>

                <span className="pt-4">Order Notes</span>
                <TextField
                  id="outlined-multiline-static"
                  label="Notes about your order e.g special notes for delivery"
                  multiline
                  rows={4}
                />
              </div>
            </div>
          </div>
          <div className="border-[1px] border-gray-100 h-fit">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
