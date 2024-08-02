import React, { Suspense } from "react";
import Wallet from "./Wallet/Wallet";
const AppRoutes = [
  {
    path: "/",
    element: (
      <Suspense>
        <Wallet />
      </Suspense>
    ),
  },
];

export default AppRoutes;
