"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "@/components/headerfooter/ResponsiveAppBar";
import FooterBar from "@/components/headerfooter/FooterBar";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";
import { AuthProvider } from "@/providers/AuthProvider";
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
            <AuthProvider>
              <Stack minHeight="100vh">
                <ResponsiveAppBar />
                <Stack flex={1}>{children}</Stack>
                <FooterBar />
              </Stack>
            </AuthProvider>
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
