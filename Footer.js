import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { SkipNext } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer (){
    return (
        <div className="footer">
          <div className="footer__left">
         <img
         className="footer__albumlogo"
         src="https://1.bp.blogspot.com/-b1YSvij1hGs/X5mvGsbejQI/AAAAAAAAJ2I/uy4kWlW63oQLSZlDb0yi2AG7ChPFNca-ACNcBGAsYHQ/s1280/Mujhe%2BPeene%2BDo%2BHindi%2BSong%2BImage%2BDarshan%2BRaval.jpg"
         
         alt="" />
         <div className="footer__songInfo">
         <h6>Mujhe Peene Do</h6>
         <p>Darshan Raval'</p>
          </div>
          </div>

          <div className="footer__center">
            <ShuffleIcon className="footer__green" />
            <SkipPreviousIcon className="footer__icon" />
            <PlayCircleOutlineIcon 
            fontSize="large"
            className="footer__icon" />
            <SkipNextIcon className="footer__icon" />
            <RepeatIcon className="footer__green" />
          
          </div>

          <div className="footer__right">
            <Grid container spacing={2}>
              <Grid item>
                <PlaylistPlayIcon />
              </Grid>
              <Grid item>
                <VolumeDownIcon />
              </Grid>
              <Grid item xs>
                <Slider/>
              </Grid>
              </Grid>
        
          </div>
        </div>
    )
}

export default Footer;