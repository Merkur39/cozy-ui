An area of a page can have a different CozyTheme and components inside
will be automatically styled.

The inverted theme is not supported for several components but the work
[is in progress](https://github.com/cozy/cozy-ui/issues/1692).

```jsx
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme'
import { Title, SubTitle } from 'cozy-ui/transpiled/react/Text'
import Button from 'cozy-ui/transpiled/react/Button'
import BarButton from 'cozy-ui/transpiled/react/BarButton'
import Paper from 'cozy-ui/transpiled/react/Paper'
import DotsIcon from 'cozy-ui/transpiled/react/Icons/Dots'
import Typography from 'cozy-ui/transpiled/react/Typography'

const props = [{}, { disabled: true}, { busy: true }];

const themesSupportingContext = [
  'regular',
  'secondary'
]

;

<div className='u-bg-primaryColor u-p-1'>
  <CozyTheme variant='inverted' className='u-stack-m'>
    <Title className='u-white'>Inverted theme</Title>
    <SubTitle className='u-white'>Buttons</SubTitle>
    {themesSupportingContext.map(theme =>
      <p key={theme}>{
        props.map(
          props => <Button key={theme + JSON.stringify(props)} label={theme} theme={theme} {...props} />
        )
      }</p>
    )}
    <SubTitle className='u-white'>BarButton</SubTitle>
    <BarButton icon={DotsIcon} />
    <CozyTheme variant='normal'>
      <Paper className='u-p-1 u-mb-1'>
          <Typography variant='body1'>
            We can always go back to normal theme if a child must "get out"
          of the theme.
          </Typography>
          <Button className='u-ml-0 u-mt-half' theme='primary' label='Primary button' />
          <p>
            <a href='#' className='u-link'>An u-link span</a>
          </p>
      </Paper>
    </CozyTheme>
    <div class='u-error'>
      Error text : "Please enter the right password."
    </div>
    <div class='u-success'>
      Valid text : "Success, you've connected EDF to your Cozy."
    </div>
    <div class='u-warning'>
      Warning text : "Something does not feel right, you may want to reload the page."
    </div>

    <p>
      <a href='#' className='u-link'>An u-link span</a>
    </p>
  </CozyTheme>
</div>
```

`MuiCozyTheme` is used under the hood so that MaterialUI components are
also styled.

```jsx
import MuiButton from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons'
import TextField from 'cozy-ui/transpiled/react/MuiCozyTheme/TextField'

;

<div className='u-bg-primaryColor u-p-1'>
  <CozyTheme variant='inverted'>
    <MuiButton variant='outlined' color='primary'>
      A button
    </MuiButton><br/>
    <TextField
      id="inverted-field"
      label="A field"
      defaultValue="Default value"
      margin="normal"
      variant="outlined"
      placeholder="placeholder"
    />
  </CozyTheme>
</div>

```
