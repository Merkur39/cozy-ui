const shadows = [
  'none',
  'rgba(29, 33, 42, 0.08) 0px 2px 4px 0px, rgba(29, 33, 42, 0.06) 0px 4px 16px 0px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.08) 0px 3px 5px 0px, rgba(29, 33, 42, 0.06) 0px 4px 17px 0px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.09) 0px 4px 6px 0px, rgba(29, 33, 42, 0.07) 0px 5px 19px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.09) 0px 5px 8px 1px, rgba(29, 33, 42, 0.07) 0px 5px 20px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.09) 0px 6px 9px 1px, rgba(29, 33, 42, 0.07) 0px 5px 22px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.1) 0px 7px 10px 1px, rgba(29, 33, 42, 0.07) 0px 6px 23px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.1) 0px 8px 11px 1px, rgba(29, 33, 42, 0.08) 0px 6px 24px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.1) 0px 9px 13px 1px, rgba(29, 33, 42, 0.08) 0px 6px 26px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.11) 0px 10px 14px 1px, rgba(29, 33, 42, 0.08) 0px 7px 27px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.11) 0px 11px 15px 2px, rgba(29, 33, 42, 0.08) 0px 7px 29px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.11) 0px 12px 16px 2px, rgba(29, 33, 42, 0.09) 0px 7px 30px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.12) 0px 13px 17px 2px, rgba(29, 33, 42, 0.09) 0px 8px 31px 4px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.12) 0px 13px 19px 2px, rgba(29, 33, 42, 0.09) 0px 8px 33px 4px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.13) 0px 14px 20px 2px, rgba(29, 33, 42, 0.09) 0px 9px 34px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.13) 0px 15px 21px 2px, rgba(29, 33, 42, 0.1) 0px 9px 35px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.13) 0px 16px 22px 3px, rgba(29, 33, 42, 0.1) 0px 9px 37px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.14) 0px 17px 23px 3px, rgba(29, 33, 42, 0.1) 0px 10px 38px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.14) 0px 18px 25px 3px, rgba(29, 33, 42, 0.1) 0px 10px 40px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.14) 0px 19px 26px 3px, rgba(29, 33, 42, 0.11) 0px 10px 41px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.15) 0px 20px 27px 3px, rgba(29, 33, 42, 0.11) 0px 11px 42px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.15) 0px 21px 28px 3px, rgba(29, 33, 42, 0.11) 0px 11px 44px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.15) 0px 22px 30px 4px, rgba(29, 33, 42, 0.11) 0px 11px 45px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.16) 0px 23px 31px 4px, rgba(29, 33, 42, 0.12) 0px 12px 47px 8px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.16) 0px 24px 32px 4px, rgba(29, 33, 42, 0.12) 0px 12px 48px 8px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px'
]

export default shadows
