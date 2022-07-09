import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';

export default function ListAdd2() {
  // const [checkedState, setCheckedState] = useState(
  //   new Array(rules.length).fill(false)
  // );

  const history = useHistory();
  const toListPage = () => {
    const path = `/regulatory`;
    history.push(path);
  }

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

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
                style={{marginLeft: '5px'}}
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
          <div className="ml-8 ">
            <div className="pt-3 text-sm font-bold font-sans">
              Selected Rules & Sub Rules
            </div>
            <div style={{ color: '#132B6B' }} className="font-semibold font-sans mt-4">
              Rule A
            </div>
            <div className="flex text-sm font-normal">

              <div className='font-sans'>Sub Rule 1</div>
              <ul className='flex '>
              <li className="ml-3 font-sans">Sub Rule 2</li>
              <li className="ml-3 font-sans">Sub Rule 3</li>
              </ul>
             
            </div>
          </div>
        </div>

        <div className="ml-8 mr-16 ">
          <div className="pt-4 text-sm font-semibold flex justify-between font-sans">
            <div className='font-sans font-bold text-black'>Choose No. of Rules</div>
            <button className='border-2 w-28 h-11 font-semibold rounded-full font-sans'style={{color: '#F66B6B',boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)"}}>Reset All</button>
          </div>

          <div className="flex mt-2 ">
            <form className='flex'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Rule A</label>
              </form>

              <form className='flex ml-9'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Sub Rule 1</label>
              </form>

              <form className='flex ml-9'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Rule C</label>
              </form>
           
          </div>

       
          <div className="pt-8 pb-6 text-sm font-bold font-sans text-black ">
            Choose No. of Sub Rules
          </div>
          <div className="flex mt-2 ">
            <form className='flex'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Sub Rule 1</label>
              </form>

              <form className='flex ml-9'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Sub Rule 2</label>
              </form>

              <form className='flex ml-9'>
              <input type="checkbox" />
              <label className="ml-1 font-sans text-sm text-black font-normal">Sub Rule 3</label>
              </form>
           
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
