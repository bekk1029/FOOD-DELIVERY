"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ResponsiveAppBar } from "@/components";
import FooterBar from "@/components/headerfooter/FooterBar";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";
import { AuthProvider } from "@/providers/AuthProviders/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainProvider } from "@/providers";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MainProvider>
              <Stack minHeight="100vh">
                <ResponsiveAppBar />
                <Stack flex={1}>{children}</Stack>
                <FooterBar />
              </Stack>
            </MainProvider>
            <CssBaseline />
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
