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

const page = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
              <div className="border-[1px] border-gray-100">2</div>
              <div className="">3</div>
            </div>
          </div>
          <div className="border-[1px] border-gray-100">2</div>
        </div>
      </div>
    </div>
  );
};

export default page;
