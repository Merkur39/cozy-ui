/**
 * Make array of actions for ActionsItems component
 *
 * @param {Function[]} actions - Array of actions to create ActionsMenuItem components with associated actions and conditions
 * @param {object} actionOptions - Options that need to be passed on actions
 * @returns {object[]} Array of actions
 */
export const makeActions = (actions = [], options = {}) => {
  return actions.filter(Boolean).map(action => {
    const actionMenu = action(options)
    const name = actionMenu.name || action.name

    return { [name]: actionMenu }
  })
}

export const getActionName = actionObject => {
  return Object.keys(actionObject)[0]
}

// We need to clean Actions since action has a displayable
// conditions and we can't know from the begining what the
// behavior will be. For instance, we can't know that
// hr will be the latest action in the sharing views for a
// folder.
// Or we can't know that we'll have two following hr if the
// display condition for the actions between are true or false
export const getOnlyNeededActions = (actions, docs) => {
  let previousAction = ''
  const displayableActions = actions.filter(actionObject => {
    const actionDefinition = Object.values(actionObject)[0]

    return (
      !actionDefinition.displayCondition ||
      actionDefinition.displayCondition(docs)
    )
  })

  return (
    displayableActions
      // We do not want to display the same 2 actions in a row
      .map(actionObject => {
        const actionName = getActionName(actionObject)

        if (previousAction === actionName) {
          previousAction = actionName
          return null
        } else {
          previousAction = actionName
        }

        return actionObject
      })
      .filter(Boolean)
      // We don't want to have an hr as the latest actions available
      .filter((cleanedAction, idx, cleanedActions) => {
        return !(
          (getActionName(cleanedAction) === 'hr' ||
            getActionName(cleanedAction) === 'divider') &&
          idx === cleanedActions.length - 1
        )
      })
  )
}

/**
 * Make a base64 string from a File object
 * @param {File} file - File object
 * @returns {Promise<string | null>} base64 string
 */
export const makeBase64FromFile = async file => {
  const reader = new FileReader()
  reader.readAsDataURL(file)

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const base64 = reader.result
      resolve(base64)
    }
    reader.onerror = err => {
      reject(err)
    }
  })
}
