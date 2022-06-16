import * as React from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import ArchiveIcon from '@material-ui/icons/Archive';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const UsersUtility = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div>
    //   <Button
    //     id="demo-customized-button"
    //     aria-controls={open ? 'demo-customized-menu' : undefined}
    //     aria-haspopup="true"
    //     aria-expanded={open ? 'true' : undefined}
    //     variant="contained"
    //     className="bg-white"
    //     disableElevation
    //     onClick={handleClick}
    //     endIcon={<KeyboardArrowDownIcon />}
    //   >
    //     Sort by
    //   </Button>
    //   <StyledMenu
    //     id="demo-customized-menu"
    //     MenuListProps={{
    //       'aria-labelledby': 'demo-customized-button',
    //     }}
    //     anchorEl={anchorEl}
    //     open={open}
    //     onClose={handleClose}
    //   >
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <EditIcon />
    //       Edit
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <FileCopyIcon />
    //       Duplicate
    //     </MenuItem>
    //     <Divider sx={{ my: 0.5 }} />
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <ArchiveIcon />
    //       Archive
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <MoreHorizIcon />
    //       More
    //     </MenuItem>
    //   </StyledMenu>
    //   <span>Filter By</span>

    //   <Button
    //     id="demo-customized-button"
    //     aria-controls={open ? 'demo-customized-menu' : undefined}
    //     aria-haspopup="true"
    //     aria-expanded={open ? 'true' : undefined}
    //     variant="contained"
    //     disableElevation
    //     onClick={handleClick}
    //     endIcon={<KeyboardArrowDownIcon />}
    //   >
    //     Department
    //   </Button>
    //   <StyledMenu
    //     id="demo-customized-menu"
    //     MenuListProps={{
    //       'aria-labelledby': 'demo-customized-button',
    //     }}
    //     anchorEl={anchorEl}
    //     open={open}
    //     onClose={handleClose}
    //   >
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <EditIcon />
    //       Edit
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <FileCopyIcon />
    //       Duplicate
    //     </MenuItem>
    //     <Divider sx={{ my: 0.5 }} />
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <ArchiveIcon />
    //       Archive
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <MoreHorizIcon />
    //       More
    //     </MenuItem>
    //   </StyledMenu>
    //   <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
    //     <InputLabel>Search</InputLabel>
    //     <OutlinedInput
    //       // id="outlined-adornment-password"
    //       // type={values.showPassword ? 'text' : 'password'}
    //       // value={values.password}
    //       // type='text'
    //       // onChange={handleChange('password')}
    //       endAdornment={
    //         <InputAdornment position="end">
    //           <SearchIcon />
    //         </InputAdornment>
    //       }
    //       inputProps={{
    //         'aria-label': 'weight',
    //       }}
    //     />
    //   </FormControl>
    //   <Button>Clear</Button>
    //   <Button
    //     id="demo-customized-button"
    //     aria-controls={open ? 'demo-customized-menu' : undefined}
    //     aria-haspopup="true"
    //     aria-expanded={open ? 'true' : undefined}
    //     variant="contained"
    //     disableElevation
    //     // onClick={handleClick}
    //     endIcon={<MoreVertIcon />}
    //   >
    //     ACTION
    //   </Button>
    // </div>
    <div className="md:flex  m-2">
      <select
        className="border-2 border-gray-200 bg-white h-8 px-3 pr-2 ml-6 rounded-lg text-sm focus:outline-none"
        style={{ width: '10%', borderRadius: '8px' }}
        // onChange={() => orderBy()}
      >
        <option value="" disabled selected>
          Sort by
        </option>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>

      <input
        className="border-0 border-gray-200 bg-white h-8 px-4 pr-4 ml-1 rounded text-sm focus:outline-none"
        style={{ width: '10%', borderRadius: '8px' }}
        type="search"
        name="filter"
        placeholder="Filter By"
      />

      <select
        className="border-2 border-gray-200 bg-white h-8 px-2 pr-6 ml-3 rounded-lg text-sm focus:outline-none"
        style={{ width: '15%', borderRadius: '8px' }}
        // onChange={() => orderBy()}
      >
        <option value="" disabled selected>
          Department by
        </option>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>

      <input
        className="border-2 border-gray-300 bg-white w-72 h-8 px-8 pr-6 ml-3 rounded-full text-sm focus:outline-none"
        // value={name}
        // onChange={filterEmployeeList}
        style={{ borderRadius: '8px' }}
        type="text"
        name="search"
        placeholder="Search by phone, email"
      />

      <button className="text-green-500 border-2 rounded-full border-gray-300 mr-3 ml-3 pr-2 pl-1">
        Clear
      </button>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        // onClick={handleClick}
        endIcon={<MoreVertIcon />}
        style={{
          color: 'white',
          borderRadius: '30px',
          background: 'rgba(102, 115, 126, 0.46)',
        }}
      >
        ACTION
      </Button> 
       {/* <div className="flex m-4 ">
        <form>
          <select className="w-24 m-4 border-2 rounded-[20px] h-9">
            <option>Sort By</option>
          </select>
        </form>
        <p className="mt-6">Search By</p>
        <form>
          <select className="w-30 m-4 border-2 rounded-[20px] h-9">
            <option>Department</option>
          </select>
        </form>
        {/* <div className="mt-4 mr-4 h-9 flex item-strech border-2 rounded-[20px]">
          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            className="w-96"
          />
          <SearchIcon className="" />
        </div>
        <button
          className=" h-9 mt-4 border-2"
          style={{
            backgroundColor: 'white',
            color: 'green',
            borderRadius: '50px',
            width: '80px',
          }}
        >
          Clear
        </button>
        <button
          className="w-28 h-9 m-4"
          style={{
            backgroundColor: '#C4C4C4',
            color: 'white',
            borderRadius: '50px',
            width: '112px',
          }}
        >
          ACTIONS
          <MoreVertIcon />
        </button> */}
        {/* </div> */}
    </div>
  );
};

export default UsersUtility;
