import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { isMobileApp } from 'cozy-device-helper'

import { isValidForPanel } from '../helpers'
import Sharing from './Sharing'
import ForwardButton from './ForwardButton'
import DownloadButton from './DownloadButton'
import BottomSheetWrapper from './BottomSheetWrapper'
import BottomSheetContent from './BottomSheetContent'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 2rem)',
    height: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTop: `1px solid ${theme.palette.divider}`
  }
}))

const FooterContent = ({ file, toolbarRef, disableSharing }) => {
  const styles = useStyles()
  const FileActionButton = isMobileApp() ? ForwardButton : DownloadButton
  const actionButtonsRef = useRef()

  if (isValidForPanel({ file })) {
    return (
      <BottomSheetWrapper
        file={file}
        actionButtonsRef={actionButtonsRef}
        toolbarRef={toolbarRef}
      >
        <BottomSheetContent
          file={file}
          disableSharing={disableSharing}
          ref={actionButtonsRef}
        />
      </BottomSheetWrapper>
    )
  }

  return (
    <div className={styles.footer}>
      {!disableSharing && <Sharing file={file} />}
      <FileActionButton file={file} />
    </div>
  )
}

FooterContent.propTypes = {
  file: PropTypes.object.isRequired,
  toolbarRef: PropTypes.object,
  disableSharing: PropTypes.bool
}

export default FooterContent
