import React, { Suspense } from "react";

import AddWallet from "./Wallet/AddWallet/AddWallet";
import Wallet from "./Wallet/Wallet";

const AppRoutes = [
  {
    path: "/add-wallet",
    element: (
      <Suspense>
        <AddWallet />
      </Suspense>
    ),
  },
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
