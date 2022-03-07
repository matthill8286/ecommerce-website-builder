import { Navbar } from "./Navbar";
import { AppHeaderComponent } from "./AppHeader/AppHeader";
import { Cell, Grid, Row } from "@matthill8286/atomic-ui";

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppHeaderComponent />
      <Grid fullWidth>
        <Row>
          <Cell columns={12}>{children}</Cell>
        </Row>
      </Grid>
    </>
  );
};

export default Layout;
