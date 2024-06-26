import { Inter } from "next/font/google";
import "../globals.css";
import { connectToDatabase } from "@/service/mongo";
import { ThemeProvider } from "@/providers/themeProvider";


const inter = Inter({ subsets: ["latin"] });
export const revalidate = 0;


export const metadata = {
  title: "Catering",
  description: "Premium catering services for your daily needs",
};

export default async function RootLayout({ children }) {

  await connectToDatabase();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
