import React from 'react'
import './style.css';
import IntentCards from '../../components/Card/AddIntentCard';
import AppCard from '../../components/Card/AppCard';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import FunctionsIcon from '@mui/icons-material/Functions';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';
import { useNavigate } from "react-router-dom";

export default function MarketPlace() {
    
    const navigate = useNavigate()

    const handleNavigate = ({params}) => {
        console.log("params",params)
        navigate(`/create?=${params}`)

    }
    


    return (
        <>
            <div style={{ display: "flex" }} className='Marketplacestyle'>
                <div style={{ display: "flex", justifyContent:'center', flexWrap: "wrap", gap: "82px" }}>
                    <IntentCards/>
                    <AppCard handleNavigate={handleNavigate} appName={"VRF"} description={"Function that generates random number"} AppIcon={FunctionsIcon} Apps={"1"} />
                    <AppCard appName={"Finance"} description={"Displays finances information"} AppIcon={AttachMoneyTwoToneIcon} Apps={"1"} />
                    <AppCard appName={"Coming Soon"} description={"Coming Soon"} AppIcon={HourglassBottomTwoToneIcon} Apps={"Comming Soon"} />
                    <AppCard appName={"Coming Soon"} description={"Coming Soon"} AppIcon={HourglassBottomTwoToneIcon} Apps={"Comming Soon"} />
                    <AppCard appName={"Coming Soon"} description={"Coming Soon"} AppIcon={HourglassBottomTwoToneIcon} Apps={"Comming Soon"} />
                    <AppCard appName={"Coming Soon"} description={"Coming Soon"} AppIcon={HourglassBottomTwoToneIcon} Apps={"Comming Soon"} />
                    <AppCard appName={"Coming Soon"} description={"Coming Soon"} AppIcon={HourglassBottomTwoToneIcon} Apps={"Comming Soon"} />

                </div>

            </div>

        </>


    )
}