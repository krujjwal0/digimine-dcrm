import { TextField, Box, Button } from '@material-ui/core';
import React, { useState, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CloseIcon from '@material-ui/icons/Close';
import { Card, CardContent, FormGroup, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AddSubCategory from './subCategories';
import AddIcon from '@material-ui/icons/Add';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ClearAllIcon from '@material-ui/icons/ClearAll';

export default function CategoryListPage(props) {

  const detailOfSubRule = (a,b)=>{
    console.log("detail of sub rule to show===", a, b)
  }



  return (
    <div className="mt-8 ml-3 w-11/12 font-sans">

      <div className={props.classes.root}>
        <Accordion
          expanded={props.expanded === 'panel1'}
          onChange={props.handleChange('panel1')}
          className=" font-sans "
          style={{ borderRadius: '30px' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="flex"
          >
            <Typography
              className={props.classes.heading}
              style={{ display: 'inline-flex' }}
            >
              <button
                className="font-sans flex w-36 h-8 text-white rounded-full flex justify-center"
                style={{ background: '#132B6B' }}
              >
                <AddIcon className="mt-1 " onClick={() => props.openSubCategory(props.list)} />
                <p className="mt-1 font-sans">Add Sub Rule</p>
              </button>

              <Dialog
                fullWidth={props.fullWidth}
                maxWidth={props.maxWidth}
                style={{
                  borderRadius: '50px',
                  marginLeft: '1%',
                  marginTop: '',
                }}
                className="w-full h-full "
                open={props.showSubCategory}
                onClose={props.handleCloseBtn}
              >
                <DialogContent
                  className="flex justify-start"
                >
                  <AddSubCategory
                    parentRule={props.list.id}
                    departmentList={props.departmentLisInCategory}
                    createSubRuleInCategory={props.createSubRuleInCategory}
                    handleCloseBtn={props.handleCloseBtn}
                  />
                </DialogContent>
              </Dialog>

              <div className="flex ml-6 mt-1 font-sans">
                <div className="flex">
                  <p
                    className="w-16 font-sans"
                    style={{
                      color: '#132B6B',
                      fontSize: '16px',
                      fontWeight: '700',
                    }}
                  >
                    {' '}
                    {props.list.name}
                  </p>
                  <p
                    className="rounded-full h-6 m-1 px-1 text-white font-sans items-center "
                    style={{
                      background: '#F66B6B',
                      fontSize: '12px',
                      width: '28px',
                    }}
                  >
                    25
                  </p>
                </div>
                <div className="ml-6 flex w-full ">
                  <ChevronLeftIcon style={{ color: '#36454F' }} />
                  {props.list.subRuleResponses.map((subrule, i) => {
                    return (
                      <div
                        className="border-2 flex w-12 h-7 flex justify-center font-sans "
                        style={{
                          color: '#36454F',

                          borderRadius: '4px',
                        }}
                        onClick = {()=>detailOfSubRule(props.list.id,subrule.id)}
                      >
                        {subrule.name}
                      </div>
                    )
                  })
                  }
                 
                  <ChevronRightIcon />
                </div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="">
                <p
                  className="font-sans h-9 px-4 py-1 flex justify-start -ml-4"
                  style={{ backgroundColor: '#F5F5F5', width: '248%' }}
                >
                  {' '}
                  <Breadcrumbs
                    aria-label="breadcrumb"
                    style={{
                      color: '#132B6B',
                      fontWeight: '600',
                      fontSize: '14px',
                    }}
                    className="font-sans "
                  >
                    <Link
                      color="inherit"
                      href="/"
                      onClick={props.handleClick}
                      className="font-sans "
                    >
                      Section
                    </Link>
                    <Link
                      color="inherit"
                      href="/getting-started/installation/"
                      onClick={props.handleClick}
                      className="font-sans"
                    >
                      Rules
                    </Link>
                    <Link
                      color="inherit"
                      href="/getting-started/installation/"
                      onClick={props.handleClick}
                      className="font-sans"
                    >
                      Clause
                    </Link>
                    <Typography
                      color="textPrimary"
                      className="font-sans"
                    >
                      SubClause No.
                    </Typography>
                  </Breadcrumbs>
                  <p
                    className="w-10 h-6 px-1  ml-2 font-sans"
                    style={{
                      background: '#8EF4D2',
                      color: '#36454F',
                      borderRadius: '4px',
                    }}
                  >
                    5(4)
                  </p>
                </p>

                <div className="m-4">
                  <div className="mt-7">
                    <p
                      className="font-sans"
                      style={{
                        color: ' #132B6B',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Title of the Rules and Regulations
                    </p>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: '14px',
                        color: '#000000',
                        fontWeight: '400',
                      }}
                    >
                      Electrical Safety Officer
                    </p>
                  </div>
                  <hr />
                  <div className="mt-7 font-sans">
                    <p
                      className="font-sans"
                      style={{
                        color: ' #132B6B',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Responsibility
                    </p>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link
                        color="inherit"
                        href="/"
                        onClick={props.handleClick}
                        className="font-sans"
                        style={{
                          fontSize: '14px',
                          color: '#000000',
                          fontWeight: '400',
                        }}
                      >
                        Owner
                      </Link>
                      <Link
                        color="inherit"
                        href="/getting-started/installation/"
                        onClick={props.handleClick}
                        className="font-sans"
                        style={{
                          fontSize: '14px',
                          color: '#000000',
                          fontWeight: '400',
                        }}
                      >
                        Agent
                      </Link>
                      <Link
                        color="inherit"
                        href="/getting-started/installation/"
                        onClick={props.handleClick}
                        className="font-sans"
                        style={{
                          fontSize: '14px',
                          color: '#000000',
                          fontWeight: '400',
                        }}
                      >
                        Manager
                      </Link>

                    </Breadcrumbs>
                  </div>
                  <hr />
                  <div className="mt-7">
                    <p
                      className="font-sans"
                      style={{
                        color: ' #132B6B',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Description
                    </p>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: '14px',
                        color: '#000000',
                        fontWeight: '400',
                      }}
                    >
                      Electrical Safety Officer
                    </p>
                  </div>
                  <hr />
                  <div className="mt-7">
                    <p
                      className="font-sans"
                      style={{
                        color: ' #132B6B',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Revelant Circular
                    </p>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: '14px',
                        color: '#000000',
                        fontWeight: '400',
                      }}
                    >
                      Electrical Safety Officer
                    </p>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
