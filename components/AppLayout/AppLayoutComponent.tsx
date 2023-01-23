import { SideBarComponent } from '../Sidebar/SideBarComponent'

const AppLayoutComponent: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div>
      <SideBarComponent />
      <div>{children}</div>
    </div>
  )
}

export { AppLayoutComponent }
