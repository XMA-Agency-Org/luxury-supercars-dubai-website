export type NavDropdownItem = {
  label: string
  href: string
  iconPath?: string
}

export type NavItem = {
  label: string
  href: string
  dropdown?: NavDropdownItem[]
}
