import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedActionsDialog = props => {
  const { onClose, title, content, actions, actionsLayout } = props
  const { dialogProps, dialogTitleProps, fullScreen, id } = useCozyDialog(props)

  return (
    <Dialog {...dialogProps}>
      {!fullScreen && (
        <DialogCloseButton
          data-test-id={`modal-close-button-${id}`}
          onClick={onClose}
        />
      )}
      <DialogContent>
        <div className="dialogContentInner">
          <DialogTitle {...dialogTitleProps} className="dialogTitleFluid">
            {fullScreen ? <DialogBackButton onClick={onClose} /> : null}
            {title}
          </DialogTitle>
          {content}
        </div>
      </DialogContent>
      <Divider />
      <DialogActions
        disableActionSpacing
        className={cx({ columnLayout: actionsLayout == 'column' })}
      >
        {actions}
      </DialogActions>
    </Dialog>
  )
}

FixedActionsDialog.propTypes = dialogPropTypes

export default FixedActionsDialog