import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCountryList = createAsyncThunk("getCountryList", async () => {
    try {
        const response = await fetch("https://restcountries.com/v2/all?fields=name,region,flag")
        .then((response) => response.json())
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqq', response)
        return response;
    } catch (error) {
        console.log(error)
    }
})