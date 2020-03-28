              function(themeObject) => {

  setShadow(themeObject.shadows)
  setColor(themeObject.palette.primary.main)
  setSecondaryColor(themeObject.palette.secondary.main)
  setPrimaryTextColor(themeObject.palette.text.primary)
  setSecondaryTextColor(themeObject.palette.text.secondary)
  setDefaultColor(themeObject.palette.background.default)
  setPaperColor(themeObject.palette.background.paper)
  setErrorColor(themeObject.palette.error.main)
  setWarningColor(themeObject.palette.warning.main)
  setInfoColor(themeObject.palette.info.main)
  setSuccessColor(themeObject.palette.success.main)
  setButtonHoverOpacity(themeObject.palette.action.hoverOpacity)

  setFontStyle({ fontFamily: themeObject.typography.fontFamily, fontSize: `${themeObject.typography.fontSize}`})

  setButtonFontWeight(themeObject.typography.button.fontWeight)
  setButtonFontSize(themeObject.typography.button.fontSize)
  setButtonTextTransform(themeObject.typography.button.textTransform)
  setButtonRipple(themeObject.props.MuiButtonBase.disableRipple)
  setButtonElevation(themeObject.props.MuiButton.disableElevation)
  setAlertVariant(themeObject.props.MuiAlert.variant)
  setButtonBorderRadius(themeObject.overrides.MuiButton.root.borderRadius)
  setButtonHeight(themeObject.overrides.MuiButton.root.height)
  setButtonPadding(themeObject.overrides.MuiButton.root.padding)
              }

  //General
  setDisplayColorPicker
setDisplaySecondaryColorPicker
  setDisplayDefaultColorPicker
  setDisplayPaperColorPicker
setButtonHoverCover
  setErrorColorPicker
  setWarningColorPicker
  setInfoColorPicker
  setSuccessColorPicker

  //Material-UI states
  setExpanded
  setTab
