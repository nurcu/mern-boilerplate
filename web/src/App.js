import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Sidebar from "./components/Sidebar";

import theme from "theme/theme.js";
const [sidebarVariant, setSidebarVariant] = useState("transparent");

function App({ Component , pageProps}) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme} resetCss={false}>
    <Sidebar
      routes={routes}
      logoText={"Curcumy"}
      display="none"
      sidebarVariant={sidebarVariant}
      {...rest}
    />
    <MainPanel
      ref={mainPanel}
      w={{
        base: "100%",
        xl: "calc(100% - 275px)",
      }}
    >
      <Portal>
        <AdminNavbar
          onOpen={onOpen}
          logoText={"PURITY UI DASHBOARD"}
          brandText={getActiveRoute(routes)}
          secondary={getActiveNavbar(routes)}
          fixed={fixed}
          {...rest}
        />
      </Portal>
      {getRoute() ? (
        <PanelContent>
          <PanelContainer>
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
          </PanelContainer>
        </PanelContent>
      ) : null}
      <Footer />
      <Portal>
        <FixedPlugin
          secondary={getActiveNavbar(routes)}
          fixed={fixed}
          onOpen={onOpen}
        />
      </Portal>
      <Configurator
        secondary={getActiveNavbar(routes)}
        isOpen={isOpen}
        onClose={onClose}
        isChecked={fixed}
        onSwitch={(value) => {
          setFixed(value);
        }}
        onOpaque={() => setSidebarVariant("opaque")}
        onTransparent={() => setSidebarVariant("transparent")}
      />
    </MainPanel>
  </ChakraProvider>
  )
}

export default App