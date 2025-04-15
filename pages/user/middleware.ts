import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import {} from "nookies";

// export default withAuth({
//   pages: {
//     signIn: "/login",
//     error: "/",
//   },
// });

export function middleware(req: NextRequest) {
  console.log("HHHHHHHHHHH", req);
  if (req.nextUrl.pathname.startsWith("/cart")) {
    // This logic is only applied to /about
    console.log("cart");
  }

  NextResponse.redirect('/pizzas')
}

// export const config = {
//   matcher: "/user/:path*",
// };
