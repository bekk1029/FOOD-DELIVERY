"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import FooterBar from "@/components/FooterBar";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";

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
            <Stack minHeight="100vh">
              <ResponsiveAppBar />
              <Stack flex={1}>{children}</Stack>
              <FooterBar />
            </Stack>
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
