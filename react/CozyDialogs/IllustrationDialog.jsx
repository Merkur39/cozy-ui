import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const IllustrationDialog = props => {
  const { onClose, title, content, actions, actionsLayout } = props
  const { dialogProps, dialogTitleProps, id, fullScreen } = useCozyDialog(props)

  return (
    <Dialog {...dialogProps}>
      {!fullScreen && (
        <DialogCloseButton
          data-test-id={`modal-close-button-${id}`}
          onClick={onClose}
        />
      )}
      <DialogContent>
        <div className="dialogContentInner withFluidActions">
          <DialogTitle
            {...dialogTitleProps}
            className="dialogTitleFluid u-w-100"
          >
            {fullScreen ? <DialogBackButton onClick={onClose} /> : null}
            <div className="u-flex u-flex-justify-center">{title}</div>
          </DialogTitle>
          {content}
          <DialogActions
            disableActionSpacing
            className={cx('dialogActionsFluid', {
              columnLayout: actionsLayout == 'column'
            })}
          >
            {actions}
          </DialogActions>
        </div>
      </DialogContent>
    </Dialog>
  )
}

IllustrationDialog.propTypes = dialogPropTypes

export default IllustrationDialog