import React, { Suspense } from "react";

import AddWallet from "./Wallet/AddWallet/AddWallet";
import Wallet from "./Wallet/Wallet";

const AppRoutes = [
  {
    path: "/",
    element: (
      <Suspense>
        <AddWallet />
      </Suspense>
    ),
  },
  {
    path: "/wallet",
    element: (
      <Suspense>
        <Wallet />
      </Suspense>
    ),
  },
];

export default AppRoutes;
