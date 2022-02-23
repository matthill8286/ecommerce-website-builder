import React, { ReactElement } from "react";

// import { AccountLayout } from "@/components";
// import { EmailPreferences } from "@/components/accountPreferences/EmailPreferences";
// import { PasswordPreferences } from "@/components/accountPreferences/PasswordPreferences";

const AccountPreferencesPage = () => {
  return <>Preferences</>;
};

export default AccountPreferencesPage;

AccountPreferencesPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
