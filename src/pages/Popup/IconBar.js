import React from 'react'
import pak from '../../../package.json'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import RefreshIcon from '@mui/icons-material/Refresh'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

export default function IconBar() {
  return (
    <span>
      <Stack direction="row" spacing={0}>
        <IconButton aria-label="refresh">
          <RefreshIcon />
        </IconButton>
        <IconButton aria-label="doc">
          <MenuBookIcon />
        </IconButton>
        <IconButton aria-label="info">
          <InfoOutlinedIcon />
        </IconButton>
        <IconButton aria-label="settings">
          <DisplaySettingsIcon />
        </IconButton>
      </Stack>
    </span>
  )
}