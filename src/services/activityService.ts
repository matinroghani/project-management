import type { Activity } from "../types/activity";

const ACTIVITY_KEY = "activities";

export function getActivities(): Activity[] {
  return JSON.parse(
    localStorage.getItem(ACTIVITY_KEY) ?? "[]"
  );
}

export function addActivity(activity: Activity) {
  const activities = getActivities();

  activities.unshift(activity);

  localStorage.setItem(
    ACTIVITY_KEY,
    JSON.stringify(activities)
  );
}