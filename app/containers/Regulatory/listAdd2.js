import React, { memo, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import { getAllDepartment } from '../Employee/actions';
import { getRuleAnd, getRuleAndSubrule, onChangeRule, postAssignedWorkAction, setDataAssignWork, setSubRules } from './actions';

const key = 'regulatory';

export function ListAdd2({ onChangeRule, getRuleAndSubrule, ruleAndSubRuleList, setSubRules, subRulesList, assignWorkData, postAssignedWorkAction, setDataAssignWork }) {
  useInjectSaga({ key, saga });
  const [selectedRule, setSelectedRule] = useState('');
  const [checkedState, setCheckedState] = useState(
    new Array(subRulesList.length).fill('')
  );

  let addSelectedSubRuleData = [];

  useEffect(() => {
    getRuleAndSubrule();
    console.log("ruleAndSubRuleList", ruleAndSubRuleList)

  }, [])


  useEffect(() => {
    console.log("subRulesList", subRulesList)
  }, [subRulesList]);

  useEffect(() => {
    console.log("addSelectedSubRuleData", addSelectedSubRuleData)
  }, [addSelectedSubRuleData])

  const history = useHistory();
  const toListPage = () => {
    const data = {
      ...assignWorkData,
      rules: SelectedRuleAndSubRule,
    }
    console.log("Data === Assign work ====", data)
    //Set data in reducer
    setDataAssignWork(data);
    //Saga Call
    postAssignedWorkAction(data);
    const path = `/regulatory`;
    history.push(path);
  }

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  let SelectedRuleAndSubRule = [];

  const handleSubRuleCheckbox = (event, subRule) => {
    const found = SelectedRuleAndSubRule.find(element => element.ruleName == selectedRule);
    console.log("MATCHED found ", found);

    if (found) {

      if (event.target.checked === true) {
        found.subRuleNames.push(subRule.name);
        console.log(" MAtched =====", found, SelectedRuleAndSubRule)
      } else {
        var index = found.subRuleNames.indexOf(subRule.name);
        if (index > -1) {
          found.subRuleNames.splice(index, 1);
        }
        // found.subRuleNames.filter((data, i) => data !== subRule.name)
        console.log("Else MAtched =====", found, SelectedRuleAndSubRule)
      }
      SelectedRuleAndSubRule = [
        ...SelectedRuleAndSubRule,
        found
      ]

    } else {
      let temp = subRule; //SubRuleNAme Only 

      if (event.target.checked === true) {

        addSelectedSubRuleData.push(temp.name);
        console.log("True")
      } else {
        addSelectedSubRuleData = [...addSelectedSubRuleData.filter((data, i) => data.id !== subRule.id)]

        console.log("False", subRule, addSelectedSubRuleData)
      }
      SelectedRuleAndSubRule = [...SelectedRuleAndSubRule,
      {
        ruleName: selectedRule,
        subRuleNames: addSelectedSubRuleData
      }
      ]
      console.log("SELECTED RULE AND SUB RULES ARE====", SelectedRuleAndSubRule)
    }

    // let temp = subRule;//SubRuleNAme Only 

    // if (event.target.checked === true) {

    //   addSelectedSubRuleData = [...addSelectedSubRuleData, temp];
    //   console.log("True")
    // } else {
    //   addSelectedSubRuleData = [...addSelectedSubRuleData.filter((data, i) => data.id !== subRule.id)]

    //   console.log("False", subRule, addSelectedSubRuleData)
    // }
    console.log("SUbRule and selected SubRules", subRule, addSelectedSubRuleData)
  };

  const onSelectRule = (e, rule) => {
    console.log("onSelectRule===", e.target.value, rule)
    // let object = {
    //   ruleName: rule.name,
    //   status:"",
    //   subRuleNames: []
    // }

    // onChangeRule(object)
    setSelectedRule(rule.name);
    var ruleCheckbox = document.getElementsByName("ruleCheckbox");
    Array.prototype.forEach.call(ruleCheckbox, function (el) {
      el.checked = false;
    })
    e.checked = true;
    //Call Action to set subrules in redux
    setSubRules(rule.subRuleResponses);
    const ruleData = {
      ruleName: selectedRule,
      subRuleNames: addSelectedSubRuleData
    }
    console.log("ruleData ==== ", ruleData)
    addSelectedSubRuleData = [];
  }
  useEffect(() => {

  }, [SelectedRuleAndSubRule])

  return (
    <div className="content">
      <div className="w-full">
        <div className="ml-3 pt-1">
          <div className="mt-3 text-xl mb-2 ">
            <Breadcrumbs
              aria-label="breadcrumb"
              className="font-sans font-bold text-xl"
              style={{ marginLeft: '0px', fontWeight: '800', fontSize: '20px' }}
            >
              <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
                className="font-sans font-bold text-xl"
                style={{
                  marginLeft: '30px',
                  fontWeight: '500',
                  fontSize: '21px',
                  color: '#132B6B',
                }}
              >
                <ChevronLeftIcon
                  sx={{ mr: 0.8 }}
                  fontSize="inherit"
                  className=""
                />
                Add
              </Typography>
            </Breadcrumbs>
            <p
              style={{ color: '#F66B6B', fontSize: '13px' }}
              className=" font-sans ml-12 -mt-1"
            >
              <Link
                color="inherit"
                href="/"
                onClick={handleClick}
                className="font-sans"
              >
                Regulatory |
              </Link>
              <Link
                color="textPrimary"
                href="/components/breadcrumbs/"
                onClick={handleClick}
                aria-current="page"
                className="font-sans ml-2"
                style={{ marginLeft: '5px' }}
              >
                Add
              </Link>
            </p>


          </div>
        </div>
        <hr />
        <div
          style={{ backgroundColor: '#F7F8FA', height: '102px' }}
          className="-ml-2 "
        >
          {
            SelectedRuleAndSubRule.length > 0 ?
              SelectedRuleAndSubRule.map((ruleNsubRule, i) => {
                return (<div className="ml-8 " key={i} >
                  <div className="pt-3 text-sm font-bold font-sans">
                    Selected Rules and  Sub Rules
                  </div>
                  <div style={{ color: '#132B6B' }} className="font-semibold font-sans mt-4">
                    {ruleNsubRule.ruleName}
                  </div>
                  {/* <div className="flex text-sm font-normal">
                    <ul className='flex '>
                      {
                        ruleNsubRule.subRuleNames.length > 0 ?
                          ruleNsubRule.subRuleNames.map((selectedSubRule, i) => {
                            return (<li className="ml-3 font-sans">{selectedSubRule}</li>)
                          })
                          : <li className="ml-3 font-sans">Select Sub Rules</li>
                      }
                    </ul>
                  </div> */}
                </div>)
              })
              : <p>Select Rules and Sub Rules</p>
          }
        </div>
        <div className="ml-8 mr-16 ">
          <div className="pt-4 text-sm font-semibold flex justify-between font-sans">
            <div className='font-sans font-bold text-black'>Choose No. of Rules</div>
            <button className='border-2 w-28 h-11 font-semibold rounded-full font-sans' style={{ color: '#F66B6B', boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}>Reset All</button>
          </div>

          <div className="flex mt-2 ">

            {ruleAndSubRuleList.map((rule, index) => {
              return (<form className='flex' key={index}>
                <input type="checkbox"
                  name="ruleName"
                  value={rule.id}
                  checked={selectedRule == rule.name}
                  onChange={(e) => onSelectRule(e, rule)}
                />
                <label className="ml-1 font-sans text-sm text-black font-normal">{rule.name}</label>
              </form>
              )
            })}


            {/* <form className='flex ml-9'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Sub Rule 1</label>
            </form>

            <form className='flex ml-9'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Rule C</label>
            </form> */}

          </div>


          <div className="pt-8 pb-6 text-sm font-bold font-sans text-black ">
            Choose No. of Sub Rules
          </div>
          <div className="flex mt-2 ">
            {
              subRulesList.length > 0 ?
                subRulesList.map((subRule, index) => {
                  return (
                    <form className='flex'>
                      <input type="checkbox" onClick={(e) => handleSubRuleCheckbox(e, subRule)} />
                      <label className="ml-1 font-sans text-sm text-black font-normal">{subRule.name}</label>
                    </form>
                  )
                })
                : <>No Sub Rules</>
            }


            {/* <form className='flex ml-9'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Sub Rule 2</label>
            </form>

            <form className='flex ml-9'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Sub Rule 3</label>
            </form> */}

          </div>
          <div className="pt-14 font-sans font-normal">
            <button
              style={{
                backgroundColor: '#F66B6B',
                color: 'white',
                borderRadius: '50px',
              }}
              className="w-28 h-10"
              onClick={toListPage}
            >
              ASSIGN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ListAdd2.propTypes = {

  // getAllDepartment: PropTypes.func,
};


const mapStateToProps = state => (
  console.log("STATE===", state), {
    // rolesList: state.users.rolesList.length > 0 ? state.users.rolesList : [],
    ruleAndSubRuleList: state.regulatoryReducer.ruleAndSubRuleList.length > 0 ? state.regulatoryReducer.ruleAndSubRuleList : [],
    subRulesList: state.regulatoryReducer.subRulesList.length > 0 ? state.regulatoryReducer.subRulesList : [],
    assignWorkData: state.regulatoryReducer.assignWorkData
  });

export function mapDispatchToProps(dispatch) {
  return {
    getAllDepartment: () => dispatch(getAllDepartment()),
    getRuleAndSubrule: () => dispatch(getRuleAndSubrule()),
    setSubRules: (data) => dispatch(setSubRules(data)),
    postAssignedWorkAction: (data) => dispatch(postAssignedWorkAction(data)),
    setDataAssignWork: (data) => dispatch(setDataAssignWork(data)),
    onChangeRule: (data) => dispatch(onChangeRule(data))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ListAdd2);

