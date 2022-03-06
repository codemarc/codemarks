import React from 'react'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import RefreshIcon from '@mui/icons-material/Refresh'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'


//handlers
const refreshClick = (event) => {
  chrome.runtime.reload()
}
const stockClick = (event) => {
  window.open("https://invest.ameritrade.com/grid/p/site#r=home")
}
const bankClick = (event) => {
  window.open("https://www.chase.com/")
}

export default function IconBar() {
  return (
    <span>
      <Stack direction="row" spacing={0}>
        <IconButton aria-label="refresh" onClick={refreshClick}>
          <RefreshIcon />
        </IconButton>
        <IconButton aria-label="stock" onClick={stockClick}>
          <ShowChartIcon />
        </IconButton>
        <IconButton aria-label="bank" onClick={bankClick}>
          <AccountBalanceIcon />
        </IconButton>
        <IconButton aria-label="settings">
          <DisplaySettingsIcon />
        </IconButton>
      </Stack>
    </span>
  )
}