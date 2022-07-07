import { TextField, Box, Button } from '@material-ui/core';
import React, { useState, memo, useEffect } from 'react';
import { HOST, BASE_PATH, SCHEMES, URL } from '../config.json';

export default function MultiFormImageData(props) {


    const uploadAction = (e) => {
      var data = new FormData();
      var imagedata = e.target.files[0]
      data.append("data", imagedata);
  
      fetch(`${SCHEMES}://${BASE_PATH}${HOST}/admin/subRule/v1/saveOrUpdate`, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        },
        body: data
      }).then(function (res) {
        if (res.ok) {
          alert("Perfect! ");
        } else if (res.status == 401) {
          alert("Oops! ");
        }
      }, function (e) {
        alert("Error submitting form!");
      });
    }
  
      return (
          <form encType="multipart/form-data" action="">
            <input type="file" name="fileName"></input>
            <input type="button" onClick={uploadAction}></input>
          </form>
      )
  }