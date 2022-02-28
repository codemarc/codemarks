import React from 'react'
import pak from '../../../package.json'
import IconBar from './IconBar'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} >
            <Button color="inherit" href="#">CodeMarks</Button>
          </Box>
          <Box sx={{ flexGrow: 7 }} ></Box>
          <Box sx={{ flexGrow: 1 }} >
            <Button color="inherit" href="http://codemarc.net" target="_new">codemarc.net</Button>
            /
            <Button color="inherit" href="https://www.linkedin.com/feed/" target="_new">LinkedIn</Button>
          </Box>
          <Box>
            <Button color="inherit" href="#">version {pak.version}</Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} >
            <IconBar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box >

  )
}