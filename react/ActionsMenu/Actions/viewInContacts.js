import React, { forwardRef } from 'react'

import { generateWebLink } from 'cozy-client'

import OpenappIcon from '../../Icons/Openapp'
import withActionsLocales from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../MuiCozyTheme/ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

export const viewInContacts = () => {
  return {
    name: 'viewInContacts',
    action: (doc, { client }) => {
      const contactId = doc._id

      const webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: `/${contactId}`
      })

      window.open(webLink, '_blank')
    },
    Component: withActionsLocales(
      forwardRef(({ t, ...props }, ref) => {
        return (
          <ActionsMenuItem ref={ref} {...props}>
            <ListItemIcon>
              <Icon icon={OpenappIcon} />
            </ListItemIcon>
            <ListItemText primary={t('viewInContacts')} />
          </ActionsMenuItem>
        )
      })
    )
  }
}