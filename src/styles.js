const styles = {
  adjustBtnWidth: (displayLanguage) => {
    return `${displayLanguage == "cn" ? "w-24" : ""}`
  },
  
  resumeTitleIcon: "w-7 h-7",

  sectionTitleDivider: "flex-grow border-b-2 border-black pb-1"
}

export { styles }