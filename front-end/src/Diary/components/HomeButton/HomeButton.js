import React, {useState} from 'react'
//import { StylesProvider } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import "./HomeButton.css"

const handleClick = () => {
  return (
    "location.href = '/Diary'"
  )
}

const HomeButton = () => {
  return (
    <div className="HomeButton">
      <Button
        variant="contained"
        onClick={handleClick}
        href="/Diary"
        sx={{
          backgroundColor: 'lightskyblue',
          width: '1600px',
        }}>
        Home
      </Button>
    </div>
  )
}

export default HomeButton;