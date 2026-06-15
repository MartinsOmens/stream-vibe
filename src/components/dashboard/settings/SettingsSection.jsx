import SettingsHeader from "./SettingsHeader";
import ProfileSettings from "./ProfileSettings";
import AccountSettings from "./AccountSettings";
import NotificationSettings from "./NotificationSettings";
import AppearanceSettings from "./AppearanceSettings";
import SubscriptionCard from "./SubscriptionCard";
import SecuritySettings from "./SecuritySettings";

import { userSettings } from "./settingsData";

export default function Settings() {
  return (
    <section className="p-6">
      <SettingsHeader />

      <div className="grid gap-6 lg:grid-cols-2">
        <ProfileSettings user={userSettings} />

        <SubscriptionCard
          plan={userSettings.plan}
        />

        <NotificationSettings
          enabled={userSettings.notifications}
        />

        <AppearanceSettings
          darkMode={userSettings.darkMode}
        />

        <AccountSettings />

        <SecuritySettings />
      </div>
    </section>
  );
}